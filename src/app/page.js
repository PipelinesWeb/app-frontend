"use client"
import { useState } from "react";

export default function Home() {
  const [materialName, setMaterialName] = useState("");
  const [materialQuantity, setMaterialQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos del formulario al backend
    // utilizando una solicitud HTTP, como fetch o axios

    // Construir la URL de la ruta de registro
    const url = "https://app-backend.up.railway.app/registrar-material";

    // Construir el cuerpo de la solicitud con los datos del formulario
    const requestBody = {
      nombre: materialName,
      cantidad: materialQuantity,
    };

    // Enviar la solicitud al backend
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        // Verificar la respuesta del backend y realizar las acciones necesarias
        if (response.ok) {
          console.log("Material registrado exitosamente");
          // Restablecer los campos del formulario si es necesario
          setMaterialName("");
          setMaterialQuantity("");
        } else {
          console.error("Error al registrar el material");
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="w-64 mx-auto" onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="material-name" className="block">
            Nombre del material:
          </label>
          <input
            type="text"
            id="material-name"
            className="w-full border border-gray-300 rounded-md px-2 py-1"
            required
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
          />
        </div>

        <div className="my-2">
          <label htmlFor="material-quantity" className="block">
            Cantidad:
          </label>
          <input
            type="number"
            id="material-quantity"
            className="w-full border border-gray-300 rounded-md px-2 py-1"
            required
            value={materialQuantity}
            onChange={(e) => setMaterialQuantity(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="block bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
        >
          Registrar material
        </button>
      </form>
    </main>
  );
}