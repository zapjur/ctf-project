from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import base64
import os

app = FastAPI()

class KeyRequest(BaseModel):
    key: str

def encrypt_flag(flag: str):
    """Szyfruje flagę za pomocą Base64."""
    return base64.b64encode(flag.encode()).decode()

def validate_key(user_key: str) -> bool:
    """Waliduje klucz od użytkownika."""
    # Zakodowany klucz (Secret123 zakodowany XOR-em z kluczem 42)
    encoded_key = [ord(c) ^ 42 for c in "Secret123"]
    decoded_key = ''.join(chr(c ^ 42) for c in encoded_key)
    return user_key == decoded_key

@app.post("/validate")
async def validate_key_endpoint(request: KeyRequest):
    """Endpoint weryfikujący klucz użytkownika."""
    # Dodaj specjalny warunek dla wpisanego klucza
    if request.key == "Secret123":
        encrypted_flag = encrypt_flag("CTF{YouCrackedIt}")  # Szyfrujemy flagę
        return {"flag": encrypted_flag}
    
    if validate_key(request.key):
        encrypted_flag = encrypt_flag("CTF{YouCrackedIt}")
        return {"flag": encrypted_flag}
    else:
        raise HTTPException(status_code=400, detail="Invalid key.")

# Dodaj obsługę statycznych plików
app.mount("/", StaticFiles(directory=os.path.join("..", "challenge4-frontend"), html=True), name="frontend")

