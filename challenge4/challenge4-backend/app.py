from fastapi import FastAPI, HTTPException, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import base64
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello World"}

class KeyRequest(BaseModel):
    key: str

def encrypt_flag(flag: str):
    """Szyfruje flagę za pomocą Base64."""
    return base64.b64encode(flag.encode()).decode()

def validate_key(user_key: str) -> bool:
    """Waliduje klucz od użytkownika."""
    encoded_key = [ord(c) ^ 42 for c in "Secret123"]
    decoded_key = ''.join(chr(c ^ 42) for c in encoded_key)
    return user_key == decoded_key

@app.post("/validate")
async def validate_key_endpoint(request: KeyRequest):
    """Endpoint weryfikujący klucz użytkownika."""
    if request.key == "Secret123":
        encrypted_flag = encrypt_flag("CTF{YouCrackedIt}")  # Szyfrujemy flagę
        return {"flag": encrypted_flag}
    
    if validate_key(request.key):
        encrypted_flag = encrypt_flag("CTF{YouCrackedIt}")
        return {"flag": encrypted_flag}
    else:
        raise HTTPException(status_code=400, detail="Invalid key.")
    
@app.get("/cookies")
def create_cookie(response: Response):
    # Ustawiamy dwa ciasteczka:
    response.set_cookie(key="fakesession", value="fake-cookie-session-value", samesite="None", secure=True)
    response.set_cookie(key="xor_hint", value="Drugi element xor to 42 (decimal)", samesite="None", secure=True)
    return {"message": "Cookies have been set!"}