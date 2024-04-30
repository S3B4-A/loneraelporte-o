document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header");
	const footer = document.querySelector(".pie");

	header.innerHTML = createHeader();
	footer.innerHTML = createFooter();
});

function createHeader() {
	let headerCode = "";

	headerCode = `<div class="row ">
        <div class="col-lg-2 bg-secondary d-none d-lg-block">
        </div>
        <div class="col-lg-12">
            <!-- Header -->
            <div class="row bg-dark d-none d-lg-flex">
                <div class="col-lg-12 text-right text-white">
                    <div class="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-3"><a
                            href="contact.html"><i class="fa fa-envelope text-primary mr-2"></i>
                            <small>consultas@loneraelpoteño.com</small></a>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center py-2 px-2"><a
                            href="https://api.whatsapp.com/send?phone=5493815392620&text=Hola,Somos%20Lonera%20El%20Porte%C3%B1o.%20Escribinos"><i
                                class="fa fa-phone-alt text-primary mr-2"></i>
                            <small>+5493815392620</small></a>
                    </div>
                    <div class="d-inline-flex align-items-center pr-2">
                        <a class="text-primary p-2" href="https://www.facebook.com/Unratomad">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-primary p-2"
                            href="https://api.whatsapp.com/send?phone=5493815392620&text=Hola,Somos%20Lonera%20El%20Porte%C3%B1o.%20Escribinos">
                            <i class="fab fa-whatsapp "></i>
                        </a>
                    </div>
                </div>
                <!-- Iconos REDES SOCIALES -->
                <div class="col-lg-5 text-right">

                </div>
                <!-- REDES SOCIALES END -->
            </div>
            <!-- Header End -->
            <!-- NAVBAR -->
            <nav class="navbar navbar-expand-lg bg-white navbar-light p-0 ">
                <a href="" class="navbar-brand d-block d-lg-">
                    <img id="logo_lonera" src="img/Logonegro.png" width="mr-auto" height="                       50px"
                        alt="" />
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between justify-content-start" id="navbarCollapse">
                    <div class="navbar-nav mr-auto py-0">
                        <a href="index.html" class="nav-item nav-link active">Nosotros</a>
                        <a href="productos.html" class="nav-item nav-link">Productos</a>
                        <a href="servicios.html" class="nav-item nav-link">Servicios</a>
                        <a href="materiales.html" class="nav-item nav-link">Materiales</a>
                        <a href="contact.html" class="nav-item nav-link">Contacto</a>
                    </div>
                </div>
            </nav>
            <!-- NAVBAR END -->
        </div>
    </div>`;

	return headerCode;
}

function createFooter() {
	let footerCode = "";

	footerCode = `<div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="row pt-5 ">
            <div class="col-lg-3 col-md-6 mb-5">
                <img id="logo_lonera" src="img/Logoblanco.png" width="mr-auto" height="   250px" alt="" />
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="font-weight-semi-bold text-primary mb-4">Contactanos</h4>
                <p><i class="fa fa-map-marker-alt text-primary mr-2"></i>Av. Roca 1663 San Miguel de Tucuman, Tucuman,
                    Argentina.</p>
                <p><i class="fa fa-phone-alt text-primary mr-2"></i>+5493815392620
                </p>
                <p><i class="fa fa-envelope text-primary mr-2"></i>consultas@loneraelpoteño.com
                </p>
                <div class="d-flex justify-content-start mt-4">
                    <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-whatsapp"></i></a>
                    <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="font-weight-semi-bold text-primary mb-4">Mensaje o Consulta!</h4>
                <p>Envianos un mensaje, Su consulta no molesta.</p>
                <div class="w-100">
                    <div class="input-group">
                        <input type="text" class="form-control border-0" style="padding: 25px;"
                            placeholder="Tu mensaje o consulta">
                        <div class="input-group-append">
                            <button class="btn btn-primary px-4">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style="border-color: #3E3E4E !important;">
        <div class="row">
            <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white">&copy; <a href="#">Lonera "El Porteño"</a>. Diseñada por <a href="">WilDev</a>
                </p>
            </div>
        </div>
    </div>`;

	return footerCode;
}
