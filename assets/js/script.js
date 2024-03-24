
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

    const titulo1 = {
        titulo:"Apartamentos en venta",
    };
    
    const titulo1Section = document.querySelector(".titulo1");
    titulo1Section.innerHTML = `
        <h1>${titulo1.titulo}</h1>
    `;
    
    titulo1Section.style="font-size: 25px;"
    titulo1Section.style.display= "flex";
    titulo1Section.style.justifyContent= "center";
    
    
}
    




{

    const producto3 = {
    
        titulo:"Apartamento de lujo",
        precio:"precio:$530.000",
        src: "https://i.pinimg.com/564x/dc/2e/cb/dc2ecb5c9349cc59c42a4fedd33895f1.jpg",
        subtitulo: " Bienvenido a tu oasis de lujo en el corazón de una zona residencial exclusiva. Este espectacular apartamento combina elegancia y comodidad en cada detalle, ofreciendo un estilo de vida sofisticado y refinado.",
        ubicacion:"📍123 Luxuly Lane,Prestige Suburb,CA 45678",
        descripcion: "🛏️ 5 habitaciones / 🚽 4 baños",
        permisos:true,
        permisos1:false,
        id:"Ver mas",
    };
    
    const producto3Section = document.querySelector(".producto3");
    producto3Section.innerHTML = `
    <article class="articulo">
    <img src="${producto3.src}"style="width:100%;">
            <h2>${producto3.titulo}</h2>
            <h3>${producto3.precio}</h3>
            <h4>${producto3.subtitulo}</h4>
            <p>${producto3.ubicacion}</p>
            <p>${producto3.descripcion}</p>
            <p style="color: ${producto3.permisos ? 'green' : 'red'};">${producto3.permisos ? '🐾Se permiten mascotas' : '🐾No se permiten mascotas'}</p>
            <p style="color: ${producto3.permisos1 ? 'green' : 'red'};">${producto3.permisos1 ? '🚬Se permite fumar' : '🚬No se permite fumar'}</p>
            <button>${producto3.id}</button>
        </article>
    `;
    
    producto3Section.style="font-size: 20px;"
    producto3Section.style.display= "flex";
    producto3Section.style.justifyContent= "center";
    producto3Section.style.textAlign= "center";
    
    }



    {

        const producto4 = {
        
            titulo:"Apartamento de lujo",
            precio:"precio:$550.000",
            src: "https://segreader.emol.cl/2019/04/29/content/pages/img/mid/N53JJAGG.jpg?gt=173001",
            subtitulo: " Bienvenido a tu oasis de lujo en el corazón de una zona residencial exclusiva. Este espectacular apartamento combina elegancia y comodidad en cada detalle, ofreciendo un estilo de vida sofisticado y refinado.",
            ubicacion:"📍123 Luxuly Lane,Prestige Suburb,CA 45678",
            descripcion: "🛏️ 5 habitaciones / 🚽 5 baños",
            permisos:true,
            permisos1:true,
            id:"Ver mas",
        };
        
        const producto4Section = document.querySelector(".producto4");
        producto4Section.innerHTML = `
        <article class="articulo">
        <img src="${producto4.src}"style="width:100%;">
                <h2>${producto4.titulo}</h2>
                <h3>${producto4.precio}</h3>
                <h4>${producto4.subtitulo}</h4>
                <p>${producto4.ubicacion}</p>
                <p>${producto4.descripcion}</p>
                <p style="color: ${producto4.permisos ? 'green' : 'red'};">${producto4.permisos ? '🐾Se permiten mascotas' : '🐾No se permiten mascotas'}</p>
                <p style="color: ${producto4.permisos1 ? 'green' : 'red'};">${producto4.permisos1 ? '🚬Se permite fumar' : '🚬No se permite fumar'}</p>
                <button>${producto4.id}</button>
            </article>
        `;
        
        producto4Section.style="font-size: 20px;"
        producto4Section.style.display= "flex";
        producto4Section.style.justifyContent= "center";
        producto4Section.style.textAlign= "center";
        
        }
        
        

        {

            const producto5 = {
            
                titulo:"Apartamento mediano",
                precio:"precio:$180.000",
                src: "https://cf.chilepropiedades.cl/imagenes/articulo/2/504f8e6b8b5442e6a8f5c08ca4248a73.jpg",
                subtitulo: " Este apartamento mediano es un oasis de confort y funcionalidad en el corazón de la ciudad. Con una distribución inteligente y espacios bien iluminados, ofrece el equilibrio perfecto entre comodidad y estilo.",
                ubicacion:"📍123 Luxuly Lane,Prestige Suburb,CA 45678",
                descripcion: "🛏️ 3 habitaciones / 🚽 3 baños",
                permisos:true,
                permisos1:true,
                id:"Ver mas",
            };
            
            const producto5Section = document.querySelector(".producto5");
            producto5Section.innerHTML = `
            <article class="articulo">
            <img src="${producto5.src}"style="width:100%;">
                    <h2>${producto5.titulo}</h2>
                    <h3>${producto5.precio}</h3>
                    <h4>${producto5.subtitulo}</h4>
                    <p>${producto5.ubicacion}</p>
                    <p>${producto5.descripcion}</p>
                    <p style="color: ${producto5.permisos ? 'green' : 'red'};">${producto5.permisos ? '🐾Se permiten mascotas' : '🐾No se permiten mascotas'}</p>
                    <p style="color: ${producto5.permisos1 ? 'green' : 'red'};">${producto5.permisos1 ? '🚬Se permite fumar' : '🚬No se permite fumar'}</p>
                    <button>${producto5.id}</button>
                </article>
            `;
            
            producto5Section.style="font-size: 20px;"
            producto5Section.style.display= "flex";
            producto5Section.style.textAlign= "center";

            
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