let usuario = {// objeto
    email: 'nico@holamundo.io',
    nombre: 'Nicolas',
    direccion: {// objeto anidado
        calle: 'Queen st',
        numero: 123,
    },
    activo: true,
    recuperarClave: function() {// función anónima
        console.log('Recuperando clave...');
    }
};