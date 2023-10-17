import { ViolentimetroA } from "../../style/compStyle";

const Violentimetro = (props) => {
  const { puntuacionTotal } = props;
  console.log(puntuacionTotal);
  return (
    <ViolentimetroA>
      <div>graficas</div>

      <section>{puntuacionTotal}</section>
      <div>datos especificos del violentimetro</div>
    </ViolentimetroA>
  );
};

export default Violentimetro;
