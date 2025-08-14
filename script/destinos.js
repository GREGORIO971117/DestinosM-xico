    const hoteles = [
      {
        imagen:"sources/acapulco.jpg",
        nombre: "Riu Palace Costa Mujeres",
        destino: "Playa Mujeres",
        descripcion: "Playa Mujeres es un exclusivo destino de playa en el Caribe Mexicano, famoso por sus arenas blancas y aguas turquesa, ideal para relajarse y disfrutar del lujo."


      },
      {
        imagen: "sources/Huatulco.jpg",
        nombre: "Moon Palace The Grand",
        destino: "Cancún",
        descripcion: "Cancún es uno de los destinos turísticos más importantes de México, conocido por su vibrante vida nocturna, playas hermosas y actividades acuáticas."

      },
      {
        imagen: "sources/Mira Mar.jpg",
        nombre: "Hilton Cancun",
        destino: "Cancún",
        descripcion: "Hilton Cancun es un lujoso resort todo incluido ubicado en la espectacular zona hotelera de Cancún, frente al Mar Caribe. Ofrece modernas instalaciones, múltiples restaurantes de clase mundial, piscinas infinitas y acceso directo a una playa privada de arena blanca. Es ideal tanto para familias como para parejas, brindando actividades para todas las edades, entretenimiento nocturno y servicios de spa de primer nivel. Disfruta de una experiencia sofisticada y relajante en uno de los destinos más emblemáticos de México."

    
      },
      {
        imagen: "sources/playa_1.jpg",
        nombre: "Dreams Natura Resort & Spa",
        destino: "Puerto Morelos - Riviera Maya",
        descripcion:" es un encantador pueblo costero ubicado entre Cancún y Playa del Carmen, conocido por su ambiente tranquilo, playas de arena blanca y aguas cristalinas."
        
      },
      {
        imagen: "sources/Portada.jpg",
        nombre: "Armony Marival Resort & Spa Punta de Mita",
        destino: "Punta de Mita",
        descripcion: "Punta de Mita es una exclusiva península ubicada en la Riviera Nayarit, famosa por sus lujosos resorts, playas de arena dorada y aguas cristalinas del Pacífico. Este destino es ideal para quienes buscan relajación, deportes acuáticos y contacto con la naturaleza. Además de su ambiente tranquilo y sofisticado, ofrece campos de golf de clase mundial, restaurantes gourmet y espectaculares vistas a la Bahía de Banderas."

      },
      {
        imagen: "sources/Portada1.jpg",
        nombre: "Dreams Bahia Mita Surf & Spa Resort",
        destino: "Bahía de Banderas",
        descripcion: "Bahía de Banderas es una de las bahías más grandes y espectaculares de México, ubicada en la costa del Pacífico entre los estados de Jalisco y Nayarit. Este destino destaca por sus extensas playas de arena dorada, aguas tranquilas y paisajes de montaña. Es ideal para actividades acuáticas como el avistamiento de ballenas, pesca deportiva, snorkel y buceo. Además, la zona cuenta con hoteles de lujo, gastronomía local e internacional, y pintorescos pueblos costeros como Nuevo Vallarta y Bucerías, que ofrecen una experiencia auténtica y relajante."

        
      }
    ];
function renderHoteles(hoteles) {
      document.getElementById('hotel-list').innerHTML = `
        <div class="row g-4">
          ${hoteles.map((hotel, idx) => `
            <div class="col-md-4">
              <div class="card shadow-sm h-100">
                <img src="${hotel.imagen}" alt="${hotel.nombre}" class="card-img-top" style="height: 220px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">${hotel.nombre}</h5>
                  <p class="card-text">${hotel.destino}</p>
                  <button class="btn btn-primary" onclick="mostrarModal(${idx})">Ver destino</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

     function mostrarModal(idx) {
      const hotel = hoteles[idx];
      document.getElementById('modalDestinoLabel').textContent = hotel.destino;
      document.getElementById('modalDestinoImg').src = hotel.imagen;
      document.getElementById('modalDestinoImg').alt = hotel.destino;
      document.getElementById('modalDestinoDesc').textContent = hotel.descripcion;
      const modal = new bootstrap.Modal(document.getElementById('modalDestino'));
      modal.show();
    }

    renderHoteles(hoteles);


