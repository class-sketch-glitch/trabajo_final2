export const contactos= [
    {
    id: 1,
    nombre: "pepe",
    imagen: "pepe.jpg",
    ultima_conexion: "2024-06-01",
    mensajes: [
      {
        id: 1,
        texto: "Hola, ¿cómo estás?",
        send_by_me: false, // Mensaje recibido
        create: "2024-06-01",
        is_read: true
      },
      {
        id: 2,
        texto: "Hola pepe",
        send_by_me: true, // Mensaje enviado
        create: "2024-06-01",
        is_read: true
      }
    ]
  },
  {
    id: 2,
    nombre: "juan",
    imagen: "juan.jpg",
    ultima_conexion: "2024-06-02",
    mensajes: [
      {
        id: 1,
        texto: "Hola ",
        send_by_me: false,
        create: "2024-06-02",
        is_read: true
      },
      {
        id: 2,
        texto: "Hola juan",
        send_by_me: true, 
        create: "2024-06-02",
        is_read: false
      }
    ]
  },
  {
    id: 3,
    nombre: "jose",
    imagen: "jose.jpg",
    ultima_conexion: "2024-06-03",
    mensajes: [
      {
        id: 1,
        texto: "Hola",
        send_by_me: false, 
        create: "2024-06-03",
        is_read: true
      },
      {
        id: 2,
        texto: "Hola jose",
        send_by_me: true, 
        create: "2024-06-03",
        is_read: false
      }
    ]
  }
    
]