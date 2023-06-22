export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="w-64 mx-auto">
      <div className="my-2">
        <label htmlFor="material-name" className="block">Nombre del material:</label>
        <input
          type="text"
          id="material-name"
          className="w-full border border-gray-300 rounded-md px-2 py-1"
          required
        />
      </div>
  
      <div className="my-2">
        <label htmlFor="material-quantity" className="block">Cantidad:</label>
        <input
          type="number"
          id="material-quantity"
          className="w-full border border-gray-300 rounded-md px-2 py-1"
          required
        />
      </div>
  
      <button type="submit" className="block bg-blue-500 text-white rounded-md px-4 py-2 mt-4">
        Registrar material
      </button>
    </form>
    </main>
  )
}
