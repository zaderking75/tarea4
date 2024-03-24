
{

    const navbar = {
        titulo: "Stone ZK",
        boton: "En venta",
        boton1:"Alquiler",
    };
        
    const navbarSection = document.querySelector(".navbar")
    navbarSection.innerHTML = `
        <div class="centrado">
            <div class="centrado">
                <h1 style="font-size: 32px;color: white;">${navbar.titulo}</h1>
            </div>
            <div class="centrado">
                <button onclick="window.location.href = 'propiedades_alquiler.html'" style="border: none;color: white;background-color: transparent;cursor:pointer;font-size: 20px;">${navbar.boton1}</button>
            </div>
            <div class="centrado">
                <button onclick="window.location.href = 'propiedades_venta.html';"" style="border: none;color: white;background-color: transparent;cursor:pointer;font-size: 20px;">${navbar.boton}</button>
            </div>
        </div>
    `;
    
    
    
    navbarSection.style.backgroundColor="rgb(35, 30, 41)";
    
    }
    
    
    
    {
    
    const titulo = {
        titulo:"Apartamentos en alquiler",
    };
    
    const tituloSection = document.querySelector(".titulo");
    tituloSection.innerHTML = `
        <h1>${titulo.titulo}</h1>
    `;
    
    tituloSection.style="font-size: 25px;"
    tituloSection.style.display= "flex";
    tituloSection.style.justifyContent= "center";
    
    }
    
    
    
    {
    
    
    const producto = {
    
        titulo:"Condominio moderno en zona residencial",
        precio:"precio:$205.000",
        src: "https://static0.housfy.com/prod/blog/images/2019/07/09091906/propiedad-horizontal-y-vertical-768x432.jpg",
        subtitulo: "Este encantador apartamento moderno ofrece un estilo de vida cómodo y conveniente en una tranquila zona residencial.",
        ubicacion:"📍123 Luxuly Lane,Prestige Suburb,CA 45678",
        descripcion: "🛏️ 3 habitaciones / 🚽 2 baños",
        permisos:true,
        permisos1:false,
        id:"Ver mas",
    
    
    };
    
    
    
    const productoSection = document.querySelector(".producto");
    productoSection.innerHTML = `
    <article class="articulo">
        <img src="${producto.src}"style="width:100%;">
        <h2>${producto.titulo}</h2>
        <h4>${producto.subtitulo}</h4>
        <p>${producto.ubicacion}</p>
        <p>${producto.descripcion}</p>
        <p style="color: ${producto.permisos ? 'green' : 'red'};">${producto.permisos ? '🐾Se permiten mascotas' : '🐾No se permiten mascotas'}</p>
        <p style="color: ${producto.permisos1 ? 'green' : 'red'};">${producto.permisos1 ? '🚬Se permite fumar' : '🚬No se permite fumar'}</p>
        <h3>${producto.precio}</h3>
        <button>${producto.id}</button>
        
    </article>
    `;
    
    
    productoSection.style="font-size: 20px;"
    productoSection.style.display= "flex";
    productoSection.style.justifyContent= "center";
    productoSection.style.textAlign= "center";
    
    
    }
    
    
    
    {
    
    const producto1 = {
    
        titulo:"Apartamento de Zona Residencial",
        precio:"precio:$210.000",
        src: "https://www.metrocuadrado.com/sites/noticias-m2/files/styles/crop_770x383/public/field/image/istock-949087660.jpg",
        subtitulo: "Este encantador apartamento se encuentra ubicado en una apacible zona residencial, ofreciendo un ambiente tranquilo y familiar.",
        ubicacion:"📍123 Luxuly Lane,Prestige Suburb,CA 45678",
        descripcion: "🛏️ 2 habitaciones / 🚽 2 baños",
        id:"Ver mas",
        permisos:true,
        permisos1:true
    };
    
        const producto1Section = document.querySelector(".producto1");
        producto1Section.innerHTML = `
            <article class="articulo">
                <img src="${producto1.src}"style="width:100%;">
                <h2>${producto1.titulo}</h2>
                <h4>${producto1.subtitulo}</h4>
                <p>${producto1.ubicacion}</p>
                <p>${producto1.descripcion}</p>
                <p style="color: ${producto1.permisos ? 'green' : 'red'};">${producto1.permisos ? '🐾Se permiten mascotas' : '🐾No se permiten mascotas'}</p>
                <p style="color: ${producto1.permisos1 ? 'green' : 'red'};">${producto1.permisos1 ? '🚬Se permite fumar' : '🚬No se permite fumar'}</p>
                <h3>${producto1.precio}</h3>
                <button>${producto1.id}</button>
                </article>
        `;
    
        producto1Section.style="font-size: 20px;"
        producto1Section.style.display= "flex";
        producto1Section.style.justifyContent= "center";
        producto1Section.style.textAlign= "center";
    
    }
    
    
    
    {
    
    const producto2 = {
    
        titulo:"Apartamento pequeño ",
        precio:"precio:$160.000",
        src: "https://www.hogares.cl/wp-content/uploads/2018/06/SLA_3734.jpg",
        subtitulo: "Este acogedor apartamento ofrece un espacio compacto pero funcional, ideal para aquellos que buscan comodidad y practicidad en un hogar acogedor. ",
        ubicacion:"📍123 Luxuly Lane,Prestige Suburb,CA 45678",
        descripcion: "🛏️ 2 habitaciones / 🚽 1 baños",
        id:"Ver mas",
        permisos:false,
        permisos1:true,
    };
    
    const producto2Section = document.querySelector(".producto2");
    producto2Section.innerHTML = `
    <article class="articulo">
    <img src="${producto2.src}"style="width:100%;">
            <h2>${producto2.titulo}</h2>
            <h3>${producto2.precio}</h3>
            <h4>${producto2.subtitulo}</h4>
            <p>${producto2.ubicacion}</p>
            <p>${producto2.descripcion}</p>
            <p style="color: ${producto2.permisos ? 'green' : 'red'};">${producto2.permisos ? '🐾Se permiten mascotas' : '🐾No se permiten mascotas'}</p>
            <p style="color: ${producto2.permisos1 ? 'green' : 'red'};">${producto2.permisos1 ? '🚬Se permite fumar' : '🚬No se permite fumar'}</p>
            <button>${producto2.id}</button>
        </article>
    `;
    
    producto2Section.style="font-size: 20px;"
    producto2Section.style.display= "flex";
    producto2Section.style.justifyContent= "center";
    producto2Section.style.textAlign= "center";
    
    }
    
    
                {
    
                    const footer = {
                        descripcion: "Gracias por su Visita"
                    };
                    
                    const footerSection = document.querySelector(".footer");
                    footerSection.innerHTML = `
                            <p>${footer.descripcion}</p>
                    `;
                    
                    footerSection.style="font-size: 20px;"
                    footerSection.style.color="white";
                    footerSection.style.display= "flex";
                    footerSection.style.justifyContent= "center";
                    footerSection.style.backgroundColor= "rgb(59, 57, 55)";
                    }