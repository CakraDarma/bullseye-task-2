import { Card } from 'components/CardGrid/Card';
import { CardGrid } from 'components/CardGrid/CardGrid';

export const ProjectsList = () => (
	<CardGrid>
		<Card title="Virtour Pura" link="" tags={['Next.js', 'Tailwind']}>
			My current project involves developing an interactive information system using Next.js 13
			technology for my thesis. It includes showcasing interactive virtual tours with 3D elements of
			existing buildings, enhancing user experiences
		</Card>
		<Card title="Wow Borneo" link="" tags={['React.js', 'Tailwind']}>
			Built an interactive and responsive travel booking platform for Borneo using react.js and
			laravel, enabling users to seamlessly browse, book, and manage their trips.
		</Card>
		<Card title="Kedai Adinda" link="" tags={['React', 'Tailwind']}>
			An interactive and responsive profile company restaurant application built using React for the
			user interface, GSAP for stunning animations
		</Card>
		<Card title="Nene Spa" link="" tags={['React', 'Tailwind']}>
			An interactive and responsive spa booking application built using React for the user
			interface, GSAP for stunning animations
		</Card>
	</CardGrid>
);
