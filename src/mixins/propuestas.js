export default {
	methods: {
		getImage(propuesta) {
			return require('@/assets/propuestas/'+propuesta.img) 
		},
	}, 
	computed: {
		propuestas() {
			return [
				{
					name: 'Universidad en Gualeguay',
					img: 'universidad2.png', 
					descriptions: [
						'Comprometidos con el desarrollo educativo y el bienestar de la provincia de Entre Ríos, La creación de una institución educativa de este nivel traerá consigo una serie de beneficios para la comunidad local y la región en general.'
					],
					propuestas: [
						{
							title: 'Investigación y desarrollo',
							descriptions: [
								'La universidad servirá como un centro de investigación y desarrollo para abordar los desaİos específicos de la región de Entre Ríos. Se establecerán programas y laboratorios especializados en áreas como la agricultura sostenible, la protección ambiental, el turismo rural y la conservación de los recursos naturales. Esto fomentará la innovación y el progreso en sectores clave para el desarrollo económico de la región',
							],
						},
						{
							title: 'Acceso a la educación superior',
							descriptions: [
								'La creación de una universidad brindará a los estudiantes locales la oportunidad de acceder a una educación superior de calidad sin tener que trasladarse a otras ciudades o provincias. Esto facilitará el acceso a la educación para aquellos que no pueden permitirse mudarse o que desean permanecer cerca de sus familias.',
							],
						},
						{
							title: 'Desarrollo económico',
							descriptions: [
								'La presencia de una universidad atraerá a estudiantes de otras regiones y países, lo que generará un aumento en la demanda de vivienda, servicios y comercio local. Esto estimulará la economía del pueblo y creará nuevas oportunidades de empleo para los habitantes locales.',
							],
						},
						{

							title: 'Colaboración con la comunidad:',
							descriptions: [
								'La universidad trabajará en estrecha colaboración con la comunidad local, organizaciones sin fines de lucro y el sector empresarial para promover proyectos conjuntos y programas de servicio comunitario. Se establecerán vínculos con empresas locales para facilitar la pasanơa de estudiantes y promover la transferencia de conocimientos y tecnología.'
							],
						},
						{

							title: 'Programas académicos adaptados a la región:',
							descriptions: [
								'La universidad ofrecerá programas académicos adaptados a las necesidades y características específicas de Entre Ríos. Se desarrollarán planes de estudio en áreas como la agricultura, la ganadería, la industria alimentaria, el turismo y la gestión de recursos naturales, entre otros. Esto garantizará que los estudiantes estén preparados para abordar los desaİos y aprovechar las oportunidades que se presentan en la región.'
							],
						},
						{

							title: 'Infraestructura educativa:',
							descriptions: [
								'Se realizarán inversiones en infraestructura educativa para garantizar que la universidad cuente con instalaciones modernas y adecuadas para la enseñanza y la investigación. Esto incluirá aulas equipadas, laboratorios especializados, bibliotecas, espacios recreativos y residencias estudiantiles para aquellos que decidan vivir en el campus.',
							],
						},
						{

							title: 'Financiamiento y apoyo gubernamental:',
							descriptions: [
								'buscar financiamiento necesario para establecer y mantener la universidad. Esto incluirá la asignación de recursos gubernamentales, la búsqueda de financiamiento externo y la colaboración con el sector privado a través de alianzas público-privadas.'
							],
						},
						{

							title: 'Participación estudiantil y autonomía universitaria:',
							descriptions: [
								'La universidad se regirá por principios de participación estudiantil y autonomía universitaria. Se promoverá la formación de centros de estudiantes y la participación activa de los estudiantes en la toma de decisiones académicas y administrativas.',
								'Gualeguay será un catalizador para el desarrollo social, económico y educativo de la región. Este proyecto representa una inversión a largo plazo en la formación de capital humano, la generación de conocimiento y la promoción de oportunidades para las generaciones futuras.' 
							],
						},
					]
				},
				{
					name: 'Transporte entre Gualeguay y Galarza',
					img: 'transporte1.png',
					descriptions: [
						'Esta iniciativa tiene como objetivo principal facilitar la movilidad de los residentes de ambas ciudades, promover la integración regional y reducir la dependencia del transporte privado.',
					],
					propuestas: [
						{
							title: 'Estudio de viabilidad:',
							descriptions: [
								'un estudio exhaustivo de viabilidad para evaluar la demanda de transporte entre Gualeguay y Galarza, así como las rutas más convenientes y los horarios óptimos. Este estudio considerará factores como la densidad poblacional, los flujos de tráfico y las necesidades de transporte de los ciudadanos.'
							],
						},

						{
							title: 'Diseño de la red de transporte:',
							descriptions: [
								'Con base en los resultados del estudio de viabilidad, diseño de una red de transporte público que conecte de manera eficiente y directa los puntos clave de ambas ciudades. Esto incluirá la determinación de las paradas estratégicas, los recorridos y la frecuencia de los servicios.'
							],
						},


						{
							title: 'Vehículos adecuados:',
							descriptions: [
								'Para garantizar un servicio de calidad, adquiriré una flota de vehículos adecuada para el transporte público. Estos vehículos estarán equipados con comodidades modernas y cumplirán con los estándares de seguridad y accesibilidad para personas con movilidad reducida.'
							],
						},


						{
							title: 'Tarifas asequibles y sistema de pago:',
							descriptions: [
								'Estableceré tarifas de transporte público asequibles para garantizar que todos los ciudadanos puedan acceder al servicio. Además, implementaré un sistema de pago conveniente, que permita el uso de tarjetas de transporte recargables y la integración con otros medios de pago electrónicos.'
							],
						},


						{
							title: 'Horarios convenientes:',
							descriptions: [
								'Aseguraré que los horarios de los servicios de transporte público sean convenientes y se adapten a las necesidades de los usuarios. Se considerarán los horarios de trabajo, de estudio y de actividades recreativas para garantizar una cobertura adecuada.'
							],
						},


						{	
							title: 'Infraestructura adecuada',
							descriptions: [
								'Mejoraré y construiré la infraestructura necesaria para el transporte público, incluyendo paradas de autobús, estaciones de transferencia y áreas de estacionamiento seguro en ambos extremos del recorrido. Además, se implementarán medidas para garantizar la seguridad de los usuarios en todas las etapas del viaje.'
							],
						},


						{
							title: 'Promoción y concientización:',
							descriptions: [
								'informar a los ciudadanos sobre los beneficios del transporte público, fomentar su uso y educar sobre la importancia de reducir el tráfico y las emisiones de carbono.'
							],
						},


						{
							title: 'Monitoreo y mejora continua:',
							descriptions: [
								'Estableceré un sistema de monitoreo y evaluación constante para recopilar datos sobre la demanda, la satisfacción de los usuarios y la eficiencia del servicio. Con base en estos datos, implementaré mejoras continuas en el sistema de transporte público para garantizar su calidad y adaptabilidad a las necesidades cambiantes de la comunidad.',
								'Este proyecto, el transporte público entre Gualeguay y Galarza se convertirá en una opción confiable, eficiente y sostenible para los ciudadanos.' 
							],
						},

					]
				},
				{
					name: 'Atención a escuelas rurales',
					img: 'atencion1.png',
					descriptions: [
						'Esta propuesta está dirigida a quienes desempeñan un papel esencial en la construcción de un futuro brillante. Los invito a unirse a este proyecto que impactará positivamente en la vida de nuestros estudiantes rurales',
					],
					propuestas: [
						{

							title: 'Desarrollo:',
							descriptions: [
								'Nuestra propuesta se basa en el compromiso de mejorar la educación en las escuelas rurales de Gualeguay, y se enfoca en los siguientes aspectos fundamentales:'
							],
						},

						{

							title: 'Acceso equitativo a la educación:',
							descriptions: [
								'Creemos firmemente en la igualdad de oportunidades para todos los estudiantes, independientemente de su ubicación geográfica. Nuestra propuesta se centra en garantizar un acceso equitativo a una educación de calidad para los estudiantes de las escuelas rurales de Gualeguay. Esto implica proporcionar recursos educativos adecuados, infraestructuras mejoradas y programas de apoyo para fomentar el desarrollo académico y personal de nuestros estudiantes.'
							],
						},

						{

							title: 'Fortalecimiento de la calidad educativa:',
							descriptions: [
								'Nos comprometemos a mejorar la calidad educativa en las escuelas rurales de Gualeguay. Esto implica brindar capacitación continua a los docentes, ofrecer recursos pedagógicos actualizados y fomentar la implementación de métodos de enseñanza innovadores. Además, promoveremos la colaboración entre las escuelas rurales y otras instituciones educativas para facilitar el intercambio de conocimientos y experiencias.'
							],
						},

						{

							title: 'Integración comunitaria:',
							descriptions: [
								'Reconocemos la importancia de la participación de la comunidad en el desarrollo de la educación rural. Nuestra propuesta promoverá la colaboración entre las escuelas rurales, las organizaciones locales y los actores comunitarios. Juntos, trabajaremos para establecer alianzas estratégicas que permitan el intercambio de recursos, la participación de voluntarios y la creación de programas extracurriculares en beneficio de nuestros estudiantes rurales.',
								'La educación es el pilar fundamental para el progreso de una comunidad. Podemos hacer una diferencia significativa en la vida de nuestros estudiantes rurales y en el desarrollo de Gualeguay. Trabajemos juntos para construir un futuro prometedor, donde cada estudiante tenga acceso a una educación de calidad y de oportunidades.'
							],
						},

					]
				},
				{
					name: 'Transporte Interurbano',
					img: 'transporte3.png',
					descriptions: [
						'Nuestra propuesta se basa en el desarrollo de un sistema de transporte interurbano inclusivo que tenga en cuenta las necesidades de movilidad de los ciudadanos de Gualeguay.',
					],
					propuestas: [

						{
							title: 'Cobertura de barrios:', 
							descriptions: [
								'Nos comprometemos a diseñar un plan integral que garantice la cobertura de todos los barrios de Gualeguay. Esto implica la identificación de rutas estratégicas que conecten los diferentes sectores de la ciudad, asegurando que ningún barrio se encuentre aislado en términos de transporte público. Nuestro objetivo es proporcionar a todos los ciudadanos un acceso equitativo a los servicios y oportunidades que Gualeguay ofrece.'
							],
						},


						{
							title: 'Horarios flexibles:', 
							descriptions: [
								'Reconocemos la importancia de adaptar el transporte a las necesidades y rutinas diarias de nuestros ciudadanos. Por lo tanto, proponemos establecer horarios flexibles que cubran las horas pico de mayor demanda y también tengan en cuenta los horarios de trabajo, estudio y otras actividades de los residentes de Gualeguay. Esto permitirá una mayor comodidad y eficiencia en el desplazamiento de los ciudadanos dentro de la ciudad.',
								'El transporte interurbano inclusivo es un elemento clave para el desarrollo y la calidad de vida en Gualeguay. Con esta propuesta, buscamos construir un sistema de transporte eficiente, accesible y que responda a las necesidades de todos los ciudadanos. Juntos, podemos lograr una Gualeguay más conectada, dinámica y equitativa.'
							],
						},

					]
				},
				{
					name: 'Área Industrial en seco',
					img: 'industria2.png',
					descriptions: [
						'Nuestra propuesta se basa en la creación de un Área Industrial en Seco en Gualeguay, que ofrecerá una serie de beneficios tanto para los empresarios como para la comunidad en general.',
					],
					propuestas: [

						{
							title: 'Infraestructura adecuada:',
							descriptions: [
								'Nos comprometemos a desarrollar una infraestructura moderna y funcional en el Área Industrial en Seco de Gualeguay. Esto incluye la construcción zonas de carga y descarga, así como también una red de servicios básicos como electricidad, agua y comunicaciones. La infraestructura estará diseñada siguiendo estándares de sostenibilidad y respeto al medio ambiente.'
							],
						},

						{
							title: 'Promoción de inversiones:',
							descriptions: [
								'Buscaremos activamente atraer inversiones locales, provinciales y nacionales para establecer sus operaciones en el Área Industrial en Seco de Gualeguay. Ofreceremos incentivos fiscales y beneficios económicos para fomentar la instalación de empresas y emprendimientos, creando un entorno propicio para la generación de empleo y el desarrollo empresarial.'
							],
						},

						{
							title: 'Desarrollo de clusters industriales:',
							descriptions: [
								'Promoveremos la creación de clusters industriales en el Área Industrial en Seco, agrupando empresas relacionadas en sectores específicos. Esto permitirá generar sinergias, impulsar la innovación y facilitar la colaboración entre empresas, promoviendo un crecimiento económico más sólido y sostenible.'
							],
						},

						{
							title: 'Capacitación y empleo local:',
							descriptions: [
								'Nos comprometemos a establecer programas de capacitación y formación profesional en colaboración con instituciones educativas locales. De esta manera, garantizaremos que los ciudadanos de Gualeguay tengan las habilidades necesarias para acceder a los empleos generados en el Área Industrial en Seco. Priorizaremos la contratación de mano de obra local, fomentando así el desarrollo económico y social de nuestra comunidad.'
							],
						},

						{
							title: 'Sostenibilidad y responsabilidad ambiental:',
							descriptions: [
								'Velaremos por que el Área Industrial en Seco de Gualeguay cumpla con estándares ambientales rigurosos. Implementaremos medidas de gestión de residuos, eficiencia energética y protección del entorno natural. Promoveremos prácticas empresariales sostenibles y responsables, contribuyendo así al cuidado del medio ambiente.',
								'El desarrollo de un Área Industrial en Seco es un paso crucial para impulsar la economía de Gualeguay y crear un futuro próspero para nuestra comunidad. Los invito a unirse a esta propuesta, aportando sus ideas y apoyando este proyecto que beneficiará a todos los ciudadanos. Juntos, podemos construir un Gualeguay fuerte, dinámico y sostenible.' 
							],
						},
					]
				},
				{
					name: 'Mejorar las condiciones del basural a cielo abierto',
					img: 'basura2.png',
					descriptions: [
						'Nuestra propuesta se basa en hacer frente al problema del basural a cielo abierto con la implementación de prácticas de reciclaje y la creación de una economía circular.',
					],
					propuestas: [

						{
							title: 'Reciclaje y gestión de residuos:',
							descriptions: [
								'Promoveremos activamente el reciclaje como una solución sostenible para la gestión de residuos. Implementaremos programas de separación en la fuente y estableceremos puntos de recolección selectiva en toda la ciudad. Asimismo, fomentaremos la educación y concientización ciudadana sobre la importancia del reciclaje y sus beneficios ambientales.'
							],
						},

						{
							title: 'Creación de una economía circular:',
							descriptions: [
								'Buscaremos transformar los residuos reciclables en recursos valiosos a través de la implementación de una economía circular. Esto implica fomentar la creación de empresas y emprendimientos que utilicen los materiales reciclados como materia prima para la producción de nuevos productos. Además, incentivaremos la compra y el consumo de productos reciclados en nuestra comunidad, generando un círculo virtuoso de producción y consumo sostenible.'
							],
						},

						{
							title: 'Generación de empleo y oportunidades económicas:',
							descriptions: [
								'La implementación de prácticas de reciclaje y economía circular creará nuevas oportunidades de empleo en Gualeguay. Impulsaremos la capacitación y formación profesional en áreas relacionadas con el reciclaje, la gestión de residuos y la producción sostenible. Asimismo, apoyaremos el establecimiento de cooperativas y microempresas dedicadas al reciclaje y la reutilización de materiales, generando así una economía local más resiliente y sostenible.'
							],
						},

						{
							title: 'Educación y concientización:',
							descriptions: [
								'Promoveremos programas educativos y de concientización sobre la importancia de la limpieza, el reciclaje y la economía circular. Trabajaremos en conjunto con instituciones educativas, organizaciones comunitarias y medios de comunicación para difundir información y promover cambios de comportamiento hacia prácticas más sostenibles.',
								'El problema del basural a cielo abierto de Gualeguay es un desaİo que debemos enfrentar con determinación y compromiso. Esta propuesta nos brinda la oportunidad de transformar nuestro entorno, proteger el medio ambiente y generar una economía más sostenible.' 
							],
						},
					]
				},
				{
					name: 'Guardia Urbana Municipal',
					img: 'guardia2.png',
					descriptions: [
						'Nuestra propuesta se basa en la creación de una Guardia Urbana Municipal en Gualeguay, cuyo principal objetivo será brindar una presencia visible y cercana en nuestras calles y espacios públicos.',
						'Guardia Urbana Municipal estará encargada de patrullar las calles y áreas públicas de Gualeguay, brindando seguridad, prevención y asistencia a los ciudadanos. Sus funciones principales incluirán la vigilancia del orden público, la prevención del delito, el control del tránsito, la asistencia en situaciones de emergencia y la mediación en conflictos vecinales.',
					],
					propuestas: [
						
						{
							title: 'Colaboración con las fuerzas de seguridad existentes:',
							descriptions: [
								'La Guardia Urbana Municipal trabajará en estrecha colaboración con las fuerzas de seguridad existentes. Estableceremos protocolos de coordinación y comunicación para garantizar un trabajo conjunto efectivo y una respuesta rápida ante situaciones de riesgo o delito. Esta colaboración fortalecerá la seguridad en nuestra ciudad y brindará mayor tranquilidad a los ciudadanos.'
							],
						},
						
						{
							title: 'Capacitación y profesionalismo:',
							descriptions: [
								'Nos comprometemos a brindar una capacitación continua y especializada a los miembros de la Guardia Urbana Municipal. Esto incluirá formación en técnicas de prevención del delito, resolución pacífica de conflictos, primeros auxilios, atención ciudadana y respeto de los derechos humanos. Garantizaremos que los integrantes de la Guardia Urbana sean profesionales capacitados y comprometidos con la seguridad y el bienestar de nuestra comunidad.'
							],
						},
						
						{
							title: 'Promoción de la participación ciudadana:',
							descriptions: [
								'La creación de la Guardia Urbana Municipal fomentará la participación ciudadana en temas de seguridad. Estableceremos canales de comunicación y mecanismos de retroalimentación con los ciudadanos, para que puedan reportar situaciones de riesgo, expresar sus preocupaciones y contribuir a la planificación de estrategias de seguridad.'
							],
						},
						
						{
							title: 'Prevención y proximidad con la comunidad:',
							descriptions: [
								'La Guardia Urbana Municipal se enfocará en acciones de prevención del delito y promoción de la convivencia ciudadana. Realizaremos patrullajes preventivos, implementaremos programas de educación y concientización en seguridad, y promoveremos la participación de la comunidad en actividades de prevención y seguridad.',
								'La creación de una Guardia Urbana Municipal en Gualeguay es una medida fundamental para fortalecer la seguridad y promover la convivencia pacífica en nuestra ciudad. '
							],
						},
					]
				},
				{
					name: 'Mejorar la seguridad a través de las cámaras de seguridad',
					img: 'camara1.png',
					descriptions: [
						'Esta propuesta es para mejorar el servicio de cámaras de seguridad en Gualeguay. Reconociendo la importancia de la vigilancia efectiva en la prevención y disuasión del delito, proponemos medidas concretas para ampliar la cobertura, optimizar el monitoreo y garantizar un servicio de calidad.',
					],
					propuestas: [
						
						{
							title: 'Ampliación de la cobertura:',
							descriptions: [
								'Realizaremos un análisis exhaustivo de los puntos críticos y áreas de mayor necesidad en términos de seguridad. Identificaremos las zonas que requieren una mayor cobertura de cámaras de seguridad. Además, consideraremos la expansión a nuevos sectores que actualmente carecen de vigilancia adecuada.'
							]
						},
						
						{
							title: 'Actualización tecnológica:', 
							descriptions: [
								'Implementaremos una modernización del sistema de cámaras de seguridad existente. Esto incluirá la instalación de cámaras de alta resolución y mayor capacidad de alcance, lo que permitirá una mejor captura de imágenes y una vigilancia más efectiva.'
							]
						},
						
						{
							title: 'Monitoreo centralizado:',
							descriptions: [
								'Estableceremos un centro de monitoreo centralizado equipado. Este centro estará operativo las 24 horas del día, los 7 días de la semana, y contará con personal capacitado para supervisar y responder rápidamente a cualquier incidente detectado por las cámaras de seguridad.'
							]
						},
						
						{
							title: 'Cooperación con las fuerzas de seguridad:',
							descriptions: [
								'Fomentaremos la colaboración estrecha y continua con las fuerzas de seguridad existentes. Esto implicará compartir información relevante obtenida a través de las cámaras de seguridad y establecer protocolos de comunicación eficientes para una respuesta rápida y coordinada ante situaciones de emergencia.'
							]
						},
						
						{
							title: 'Participación ciudadana:',
							descriptions: [
								'Estableceremos canales de comunicación para que los ciudadanos puedan reportar incidencias o brindar información relevante. Además, realizaremos campañas de concientización sobre la importancia de las cámaras de seguridad como herramienta para la prevención del delito.'
							]
						},
						
						{
							title: 'Evaluación y mejora continua:',
							descriptions: [
								'Implementaremos un sistema de evaluación periódica del servicio de cámaras de seguridad. Esto nos permitirá identificar posibles áreas de mejora, ajustar la cobertura según las necesidades cambiantes y garantizar la eficiencia y efectividad del sistema a largo plazo.',
								'La mejora del servicio de cámaras de seguridad en Gualeguay es un paso crucial para fortalecer la seguridad en nuestra ciudad. Para la construcción de un entorno seguro y protegido para todos. Juntos, lograremos una Gualeguay más segura y próspera.'
							]
						},
					]
				},
			]
		}
	}
}