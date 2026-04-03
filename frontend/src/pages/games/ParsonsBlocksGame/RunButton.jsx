export default function RunButton({ runProgram, disabled }) {

  return (

    <button
      onClick={runProgram}
      disabled={disabled}
      className="bg-green-500 hover:bg-green-600 text-white py-3 font-bold"
    >

      ▶ Ejecutar programa

    </button>

  );
}