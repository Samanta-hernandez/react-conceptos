import Menu from "../componentes/Menu";
import Pie from "../componentes/Pie"
import Reproductor from "../recursos/img/ReproductorVideo.png"
import Facial1 from "../recursos/img/facial1.jpg"
import Facial2 from "../recursos/img/facial2.jpg"
import Facial3 from "../recursos/img/facial3.jpg"

function Faciales (){
    return(
    <>
    <Menu/>
    <section class="bg-danger-a mt-5">
            <div class="container">
                <div class="row">
                    <div class="col mt-5"><h1>Mascarillas Faciales</h1></div>
                </div>
                <div class="row mt-5 pb-sm-5">
                    <div class="col-sm-12 col-md mb-5">
                        <img class="w-75 h-100 position-relative i-b"src={Facial1} alt=""/>
                        <img class="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Mascarilla aclarante de
                            avena </h3>
                        <p>Ayuda con el exceso de grasa,
                            aclara la piel y elimina manchas.
                            También la puedes aplicar en el
                            cuerpo.</p>
                    </div>
                </div>
                <div class="row pb-sm-5">
                    <div class="col-sm-12 col-md mb-5">
                        <img class="w-75 h-100 position-relative i-b" src={Facial2} alt=""/>
                        <img class="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Mascarilla para el acne
                            de tomate y azucar </h3>
                    <p>Le da frescura a tu rostro, combate
                        en acné y las manchas, limpia los
                        poros, elimina las celulas muertas,
                        puntos negros y el exceso de grasa.
                        Sirve de exfoliante.</p>
                    </div>
                </div>
                <div class="row pb-sm-5">
                    <div class="col-sm-12 col-md mb-5">
                        <img class="w-75 h-100 position-relative i-b" src={Facial3} alt=""/>
                        <img class="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Mascarilla de cafe y huevo</h3>
                        <p> Elimina puntos negros, minimiza
                            los poros, elimina imperfecciones
                            y aclara la piel.</p>
                    </div>
                </div>
            </div>
        </section>
    <Pie/>
    </>
    );
}


export default Faciales