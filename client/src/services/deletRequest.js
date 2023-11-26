import Swal from "sweetalert2";

export const peticionDelete = async (url) => {
  const confirmation = await Swal.fire({
    title: "¿Está seguro?",
    text: "Esta acción eliminará el registro permanentemente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  });

  if (confirmation.isConfirmed) {
    const response = await fetch(http + url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const json = await response.json();
      Swal.fire({
        icon: "success",
        title: "¡Organización eliminada!",
        text: "Registro eliminado exitosamente",
      });
      return json;
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar",
        text: "Hubo un problema al intentar eliminar el registro",
      });
    }
  } else {
    Swal.fire("Cancelado", "La acción ha sido cancelada", "info");
  }
};
