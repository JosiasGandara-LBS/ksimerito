import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'ksimerito';

	regalosHabilitados: number[] = [];
	regalosDeshabilitados: number[] = [];
	numeroRegalo = 0;

	codigos = [
		{ numeroRegalo: 18, codigo: 'EXCS-65-15', fecha: '01 DE DICIEMBRE 2024', descripcion: 'Se lo importante que era para ti esa pulsera mi niña, cuando la vi, recordé lo mucho que significaba para tí, por eso quiero que la conserves y cuides muy bien mi amor, te amo mucho.' },
		{ numeroRegalo: 3, codigo: 'YVMY-66-93', fecha: '02 DE DICIEMBRE 2024', descripcion: 'Cuando vi esa pequeña flor, recordé que fue uno de los primeros Charms que tuviste, además la flor de cerezo simboliza la inocencia, la sencillez y la belleza natural, y todo eso es algo que te representa mi niña, espero te guste mucho, te amo.' },
		{ numeroRegalo: 14, codigo: 'IZXE-32-24', fecha: '03 DE DICIEMBRE 2024', descripcion: 'Cuando vi ese pequeño Charm, me hizo recordar aquel dia en la playa donde te pedí que fueras mi novia y te puse ese collar de conchita, al cual le dimos un significado muy hermoso, por eso quise conservar ese recuerdo en ese pequeño Charm tambien, te amo mucho.'},
		{ numeroRegalo: 7, codigo: 'TKQJ-33-58', fecha: '04 DE DICIEMBRE 2024', descripcion: 'El Charm de la princesa Tiana, una mujer trabajadora, determinada, compasiva e independiente, todas ellas forman parte de ti, mi princesa, no sabes cuan dichoso me siento de tenerte a mi lado, te amo mucho.'},
		{ numeroRegalo: 22, codigo: 'VVBN-57-26', fecha: '05 DE DICIEMBRE 2024', descripcion: 'El Charm de la princesa Ariel, una mujer curiosa, soñadora, aventurera, apasionada, rebelde, leal y amorosa, son rasgos que te caracterizan a la perfección, por eso no dude en que sería el charm de tu princesa ideal, espero te guste mucho mi niña, te amo mucho.'},
		{ numeroRegalo: 15, codigo: 'NNVK-60-92', fecha: '06 DE DICIEMBRE 2024', descripcion: 'El Charm de Rapunzel, una mujer optimista, creativa, valiente, cariñosa y empática, rasgos muy genuinos de ti mi niña, nunca pierdas tu escencia, porque son caracteristicos de ti, siempre se tu mi amor y todo te saldrá increible, te amo mucho.'},
		{ numeroRegalo: 16, codigo: 'DVQD-52-51', fecha: '07 DE DICIEMBRE 2024', descripcion: 'Esta pequeña pulsera con una flor morada, me recordó a ti en todo sentido, su color, forma, lo que representas para mi, espero te haya gustado mi niña, te amo mucho.'},
		{ numeroRegalo: 21, codigo: 'WLQN-40-42', fecha: '08 DE DICIEMBRE 2024', descripcion: 'De verdad te brillaban los ojos mientras me mostrabas que eran los Sunny Angels y veía que de verdad ahnelabas tener uno amor, por eso lo busqué hasta encontrarlo, espero te guste mucho el que salga amor, te amo mucho.'},
		{ numeroRegalo: 13, codigo: 'OPOO-64-28', fecha: '09 DE DICIEMBRE 2024', descripcion: 'Uhhh aquí comienzan los pequeños dulces, este es solo el comienzo de los muchos chocolates que encontrarás en cada cajita mi niña, espero te gusten todos los que elegí, te amo mucho.'},
		{ numeroRegalo: 5, codigo: 'OUSI-26-24', fecha: '10 DE DICIEMBRE 2024', descripcion: 'Desde que me enseñaste estos Nutella B-Ready sabía que serían un vicio, aunque el vicio resultó ser tuyo eh JAJAJA, disfrutalos mi niña (y comparte eh), te amo mucho.'},
		{ numeroRegalo: 1, codigo: 'GISE-66-75', fecha: '11 DE DICIEMBRE 2024', descripcion: 'Uno de tus chocolates favoritos, no podía dejar al Kinder Bueno fuera amor, tenía que venir si o si, espero lo disfrutes mucho, ve formando tu montaña de chocolates JAJAJA, te amo mucho.'},
		{ numeroRegalo: 8, codigo: 'ODTS-56-46', fecha: '12 DE DICIEMBRE 2024', descripcion: 'Tu famoso huevito Kinder, espero no se haya derretido ahí dentro, no lo pensé pero bueno, ahí está y no puedo sacarlo ya JAJAJA, ya veremos que sorpresa te tocará mi niña, te amo mucho.'},
		{ numeroRegalo: 4, codigo: 'TYQG-59-38', fecha: '13 DE DICIEMBRE 2024', descripcion: 'Los Ferreros que nunca falten, aunque de esos me gustan mucho eh, fue plan con maña, te robaré un paquetito y el otro si para ti amor JAJAJA, disfrutalos mucho mi niña, te amo mucho.'},
		{ numeroRegalo: 2, codigo: 'ISVJ-30-79', fecha: '14 DE DICIEMBRE 2024', descripcion: 'Bueno, fueron dificiles las siguientes elecciones pero, fak, cuando los vi y que anteriormente me habías mostrado algunos, sabía que tenía que regalarte algunos, porque el que compra, quita, y uhhh espero el momento de hacerlo JAJAJA, espero te gusten mi niña y abrelos sola, te amo mucho.'},
		{ numeroRegalo: 17, codigo: 'NCCQ-77-17', fecha: '15 DE DICIEMBRE 2024', descripcion: 'Como los tomaste al azar, pues no se cual de todos tomaste, pero de verdad, cualquiera de los que abras, te quedarían preciosisimos mi niña, no me cabe la menor duda, aunque vienen unas que hijuesu, se te va a meter el calzón, pero ntp, yo te lo saco JAJAJA (perdon por ser naco), te amo mucho.'},
		{ numeroRegalo: 6, codigo: 'EIMQ-31-12', fecha: '16 DE DICIEMBRE 2024', descripcion: 'Sabes amor, ahora que lo pienso, me causa duda en donde guardarás todos los conjuntos porque siento que si los ven, van a pegar de gritos al cielo o no se, fak, si no aquí te los guardo amor, ntp, aquí te los pones y quitas, es mas, hasta te los lavo a mano y todo JAJAJA, te amo mucho.'},
		{ numeroRegalo: 12, codigo: 'RJHB-89-52', fecha: '17 DE DICIEMBRE 2024', descripcion: 'No se si esperabas que te regalaría algo asi amor, y de verdad que fue muy dificil pq no se si te gustarían o no, o fueran cómodos o no se, pero me parecieron muy muy bonitos, y fak, siento que te quedarían preciosisimos (que se que así es), te amo mucho.'},
		{ numeroRegalo: 10, codigo: 'UCVD-94-89', fecha: '18 DE DICIEMBRE 2024', descripcion: 'Infaltable tu famoso Labello de Cereza mi niña, para que sus labios todos preciosos no se le resequen y le pueda dar sus besotes bien tronados corazón, guardalo muy bien corazón, te amo mucho.'},
		{ numeroRegalo: 9, codigo: 'UDKL-99-12', fecha: '19 DE DICIEMBRE 2024', descripcion: 'Esta pulserita se que te ayudará a protegerte de todo mal mi niña, de toda mala vibra y malos ojos que te quieran hechar los y las desgraciad@s, espero dure mucho para que te protega mucho tiempo amor, cuidala y por ultimo, te amo muchooo.'},
		{ numeroRegalo: 11, codigo: 'BTCH-89-29', fecha: '20 DE DICIEMBRE 2024', descripcion: 'Si te tocó esta cajita vacía, quiere decir que sacaste una cajita comodín, la cajita comodin la puedes canjear por cualquier cosa mi niña, así que tienes el poder en tus manos.'},
		{ numeroRegalo: 20, codigo: 'RJAM-54-45', fecha: '21 DE DICIEMBRE 2024', descripcion: 'Fue una recomendación esta pulserita, para que diosito o el santo que venga, te proteja de todo mal y daño mi corazón, anhelo que tengas una vida plena, sana y que solo nos pase viendonos reir a ambos, te amo mucho mi amor.'},
		{ numeroRegalo: 23, codigo: 'OGSS-24-81', fecha: '22 DE DICIEMBRE 2024', descripcion: 'Nuestro 6to mesesario mi amor (sin contar los 9 años eh), no sabes lo dichoso y feliz que me siento por compartir mi vida con la niña a la que veo a mi lado, con la que quiero compartir mi futuro, risas, llantos, enojos, momentos felices, todo corazón, nunca olvides que tienes a alguien que está orgulloso de la niña en la que te convertiste, y sobre todo, que te ama de aquí hasta el infinito y más allá.'},
		{ numeroRegalo: 19, codigo: 'ECQW-76-96', fecha: '23 DE DICIEMBRE 2024', descripcion: 'Este llaverito marca 2 canciones que representan nuestra relación, su mera escencia es como escuchar como narran nuestra historia, aquellos sentiemientos que con tanta fuerza y devoción se hicieron uno, espero te guste muchop, te amo mucho mi niña.'},
		{ numeroRegalo: 24, codigo: 'BSXI-53-80', fecha: '24 DE DICIEMBRE 2024', descripcion: 'Mi niña, espero que te guste mucho la sorpresa que te trajo Santa Claus (uno muy guapo y chambeador por cierto), nunca olvides que detrás de cada esfuerzo y horas de trabajo, siempre tienen su recompensa, y para mi esa recompensa es ver feliz y alegre a tu niña interior, te amo muchisimo mi niña, que pases una feliz navidad.'}
	];

	codigosUsables = this.codigos;
	cardVisibleYesNo: boolean = false;
	inputCodigo: string = '';
	cardInformation: any;

	currentDate: Date = new Date();
	formattedDate = this.currentDate.toLocaleDateString('es-ES').split('/')[0];

	constructor() {
		this.loadRegalosFromStorage();
	}

	loadRegalosFromStorage(): void {
		const habilitados = localStorage.getItem('regalosHabilitados');
		const deshabilitados = localStorage.getItem('regalosDeshabilitados');

		this.regalosHabilitados = habilitados ? JSON.parse(habilitados) : [14, 7, 22, 15, 16, 13, 5, 1, 8, 4, 2, 17, 6, 10, 20];
		this.regalosDeshabilitados = deshabilitados ? JSON.parse(deshabilitados) : [3, 18, 9, 11, 23, 24, 19, 21, 12];
	}

	saveRegalosToStorage(): void {
		localStorage.setItem('regalosHabilitados', JSON.stringify(this.regalosHabilitados));
		localStorage.setItem('regalosDeshabilitados', JSON.stringify(this.regalosDeshabilitados));
	}

	verificarCodigo(numeroRegalo: number): void {
		const today = new Date().toLocaleDateString('es-ES');
		const interactionData = this.getDailyInteractionData();

		if (interactionData.date !== today) {
		  // Nuevo día: reinicia contador
		  interactionData.date = today;
		  interactionData.interactions = 0;
		}

		if (interactionData.interactions >= 2) {
		  alert('Ya has obtenido el número máximo de regalos por hoy. Vuelve mañana.');
		  return;
		}

		this.cardVisibleYesNo = false;

		const codigo = this.codigosUsables.find((c) => c.numeroRegalo === numeroRegalo);
		if (codigo) {
		  this.cardInformation = codigo;
		  this.cardVisibleYesNo = true;

		  // Mover de habilitados a deshabilitados
		  const indexHabilitado = this.regalosHabilitados.indexOf(numeroRegalo);
		  if (indexHabilitado !== -1) {
			this.regalosHabilitados.splice(indexHabilitado, 1);
			this.regalosDeshabilitados.push(numeroRegalo);
			this.saveRegalosToStorage(); // Guardar cambios
		  }

		  // Incrementar contador de interacciones
		  interactionData.interactions++;
		  this.saveDailyInteractionData(interactionData);
		}
	}

	private getDailyInteractionData(): { date: string; interactions: number } {
		const storedData = localStorage.getItem('dailyInteractions');
		return storedData ? JSON.parse(storedData) : { date: '', interactions: 0 };
	}

	private saveDailyInteractionData(data: { date: string; interactions: number }): void {
		localStorage.setItem('dailyInteractions', JSON.stringify(data));
	}

	shuffleArray(array: number[]): void {
		const arrayCopy = [...array];

		for (let i = arrayCopy.length - 1; i > 0; i--) {
		  	const randomIndex = Math.floor(Math.random() * (i + 1));
		  	[arrayCopy[i], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[i]];
		}

		this.numeroRegalo = arrayCopy[0];
		this.verificarCodigo(this.numeroRegalo);
	}
}
