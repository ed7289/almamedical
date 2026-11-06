# TODO — Landing Alma Medical

- [x] **Landing completa basada en el PDF adjunto:** Hero, diferenciadores, directorio de especialistas, paquetes/consultas/tarifas, FAQ y ubicación/contacto incluidos con nombres, cédulas, horarios, precios, dirección y WhatsApp.
- [x] **Diseño responsivo con Bootstrap:** HTML semántico, Bootstrap 5, navegación colapsable, tarjetas, filtros de especialistas, acordeón FAQ y llamadas a la acción para móvil, tableta y escritorio.
- [x] **Sistema visual de marca:** fondo #FFFFFF, texto #252525 y paleta #E4C68D, #98A186, #A76D60, #C4A072, #E0CCB1 y #846145 aplicada en botones, barras, fondos, tarjetas y elementos gráficos.
- [x] **Tipografía legible y moderna:** DM Sans para cuerpo y Manrope para titulares, ambas disponibles desde Google Fonts.
- [x] **Recursos visuales:** se integraron dos fotografías realistas para el hero y el área de ultrasonido, además de nueve retratos profesionales representativos —uno por especialista— diferenciados por género según el nombre y sin pretender ser una semejanza de las personas reales.
- [x] **Especialistas y especialidades:** se conservaron los nombres de las especialidades, nombres completos, cédulas y horarios; Pediatría ahora muestra individualmente a sus cuatro especialistas con foto, datos y disponibilidad.
- [x] **Accesibilidad y CTA:** textos alternativos, navegación semántica, foco visible, soporte para reducción de movimiento, contraste legible y enlaces directos a https://wa.me/527222864239.
- [x] **Entrega WebDev:** manifiesto de ruta `/manus-routes.json`, servidor funcional en el puerto 3000, validación HTTP de home/rutas/logo y metadato de logo configurado.

- [x] **Directorio pediátrico en tarjetas individuales:** Dr. José Guadalupe, Dra. Karen Teresa, Dra. Lizbeth y Dra. Zulma aparecen en cuadros separados como el resto de especialistas, conservando fotos, nombres, cédulas, horarios, filtro de Pediatría y CTA de agendamiento.

- [x] **FAQ sobre urgencias:** la respuesta de “¿Atienden urgencias?” aclara que Alma Medical no ofrece urgencias médicas ni atención hospitalaria, explica el alcance ambulatorio y dirige a hospital/911 ante señales de emergencia, sin retrasar la atención.

- [x] **FAQ sobre citas:** la respuesta de “¿Necesito cita obligatoria?” aclara que Medicina General permite atención en horarios continuos con posibilidad de cita previa, mientras que especialidades, estudios, control prenatal y paquetes requieren agendar previamente.

- [x] **Descripción de tarifas:** se actualizó el texto a “Rompiendo la barrera de desconfianza con precios claros y públicos. Sin sorpresas.”

- [x] **Categorías del directorio Mujer y embarazo:** Fisioterapia y Psicología también están etiquetadas para aparecer al seleccionar Mujer y embarazo, sin dejar de pertenecer a Bienestar ni duplicar sus tarjetas.

- [x] **Tarjeta de agendamiento:** el diferenciador ahora se titula “Agendamiento directo.” y conserva su descripción y enlace contextual.

- [x] **Descripción de agendamiento:** la tarjeta conserva el título “Agendamiento directo.” y ahora indica que se consulta disponibilidad en minutos directamente por WhatsApp.

- [x] **Alineación del directorio:** el enunciado “Trayectoria, cédulas profesionales visibles y una atención que comienza escuchando.” queda centrado en escritorio y móvil mediante una regla específica para `#especialistas`.

- [x] **Etiqueta flotante del hero:** el indicador de WhatsApp ahora muestra “Agenda en minutos.” y conserva el subtítulo “Directo por WhatsApp”.

- [x] **Foto de la Dra. Lizbeth:** se reemplazó la imagen de la especialista pediátrica por la fotografía proporcionada, conservando su información y categoría.

- [x] **Foto de la Dra. Zulma:** se reemplazó la imagen de la especialista pediátrica por la fotografía proporcionada, conservando su información y categoría.

- [x] **Tarjetas uniformes del directorio:** en escritorio todas las fichas de especialistas, incluida Pediatría y demás categorías filtrables, usan la misma altura visual; en móvil conservan altura automática para mantener la legibilidad.

- [x] **Vista Todos uniforme:** las cuatro tarjetas pediátricas ahora usan la misma columna `col-lg-4` que las otras cinco, igualando ancho y alto en el directorio completo.

- [x] **Subespecialidades pediátricas:** debajo del nombre del Dr. José Guadalupe aparece “Pediatra Infectólogo” y debajo del nombre de la Dra. Karen Teresa aparece “Pediatra Neonatóloga”.

- [x] **Costo de Pediatría:** las cuatro fichas pediátricas muestran “Costo de consulta: $700” debajo de sus datos profesionales.

- [x] **Color del costo pediátrico:** “Costo de consulta: $700” ahora usa el tono terracota de marca `#A76D60` para diferenciarlo visualmente.

- [x] **Costos ginecológicos expandibles:** la tarjeta de la Dra. Cecilia Veneranda se puede activar con clic, Enter o Espacio y muestra una tabla con consulta ($600), Check Up Ginecológico ($1,080), Papanicolau ($500) y Gardasil 9 ($3,600), incluyendo observaciones y nota del USG pélvico.

- [x] **Observación del Check Up Ginecológico:** la aclaración “* Si el motivo de consulta lo amerita.” ahora aparece dentro de la celda de observaciones junto al USG pélvico, sin duplicarse fuera de la tabla.

- [x] **Costos de Medicina General expandibles:** la tarjeta de la Dra. Karina se puede abrir con clic, Enter o Espacio y muestra los 12 servicios solicitados, incluyendo consultas, ultrasonidos, control prenatal, certificados, tomas, procedimientos, nebulizaciones y curación menor con sus costos y observaciones.

- [x] **Costos de Psicología expandibles:** la ficha de la Psicóloga Claudia se puede abrir con clic, Enter o Espacio y muestra Terapia individual por $400 y Terapia de pareja por $600.

- [x] **Costos de Fisioterapia expandibles:** la ficha del Fisioterapeuta Guillermo se puede abrir con clic, Enter o Espacio y muestra Consulta ($450), Masaje de Espalda ($600), Masaje Cuerpo completo ($800) y Descarga muscular ($600).

- [x] **Costo de Nutrición:** la ficha de la Nutrióloga María de los Ángeles muestra “Costo de consulta: $400” con el estilo visual terracota del directorio.

- [x] **Logotipo de Alma Medical:** se reemplazó la marca visual del pie de página por el logotipo proporcionado y el encabezado principal ahora muestra únicamente el texto “Alma Medical”; también se actualizó el logo de metadata del proyecto.

- [x] **Logotipo separado en navegación:** la barra superior usa el símbolo de cruz con alas a la izquierda y el texto original “Alma Medical” ampliado a la derecha, a partir de recortes del archivo proporcionado.

- [x] **Corrección de logotipos e interacción:** se restauró el CSS completo, se limitaron explícitamente los tamaños del símbolo, texto y logotipo del pie, y se reforzó la apertura de las cuatro fichas de costos mediante clic, Enter y Espacio.

- [x] **Redes sociales en el footer:** se añadieron botones con los logotipos de Facebook e Instagram, cada uno enlazado a la página oficial indicada y adaptado para escritorio y móvil.

- [x] **Tabla de Medicina General:** en escritorio el panel de costos se desplaza ligeramente hacia la izquierda, usa una distribución fija con 48% para Observaciones y permite envolver el texto para que las notas se lean completas.

- [x] **Separación de columnas corregida:** Servicio, Costo y Observaciones ahora tienen anchos independientes de 34%, 16% y 50%, con divisor visual y espaciado interno para evitar empalmes o texto cortado.

- [x] **Costo de retiro de implante ajustado:** `$300–500` y `+ material` se muestran en líneas separadas dentro de la columna Costo, sin desbordar la tabla.

- [x] **Envoltura de costos en escritorio:** la columna Costo ya no usa texto forzado en una sola línea; valores largos como `$200 por los 2 oídos + material`, `$80 + material` y `$50–500 + material` se distribuyen hacia abajo dentro de su celda sin invadir Observaciones.

- [x] **Agendamiento personalizado por especialista:** Medicina General usa doctor=77, Psicología doctor=74, Fisioterapia doctor=73, Nutrición doctor=71, Ginecología doctor=70, Dra. Lizbeth doctor=201, Dr. José Guadalupe doctor=75 y Dra. Karen Teresa doctor=76 en Bookwy; la Dra. Zulma conserva su enlace de WhatsApp.

- [x] **Recursos visuales locales para entrega manual:** las 14 imágenes usadas por la landing ahora están incluidas dentro de `images/`, con referencias locales en `index.html`, para que el proyecto no dependa de `/manus-storage/` al subirlo a GitHub.
