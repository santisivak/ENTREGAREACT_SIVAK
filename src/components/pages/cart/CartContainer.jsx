import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "seguro quieres eliminar todo ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "si, limpiar",
      denyButtonText: `No, no limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  let total = getTotalPrice();
  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "200px", border: "2px solid steelblue" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <Button variant="contained" onClick={() => deleteById(elemento.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <Button variant="outlined" onClick={limpiar}>
            Limpiar carrito
          </Button>
          <Link to="/checkout">
            <Button variant="outlined">Terminar compra</Button>
          </Link>
        </>
      )}

      <h2>El total del carrito es : {total} </h2>
    </div>
  );
};

export default CartContainer;
