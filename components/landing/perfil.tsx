import React from "react";

interface PerfilProps {
	nombre: string;
	imagenUrl: string;
	alt?: string;
	className?: string;
}

export const Perfil: React.FC<PerfilProps> = ({ nombre, imagenUrl, alt, className }) => {
	return (
		<div className={`flex flex-col items-center ${className ?? ""}`}>
			<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
				<img
					src={imagenUrl}
					alt={alt || `Foto de perfil de ${nombre}`}
					className="w-full h-full object-cover"
				/>
			</div>
			<span className="mt-4 text-lg font-semibold text-center">{nombre}</span>
		</div>
	);
};
