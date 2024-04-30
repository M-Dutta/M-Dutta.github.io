import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Box } from "@material-ui/core";
import particleOptions from './particlesjs-config.json'

const BGParticles = () => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		}).catch(() => console.warn("Unable to load particles json config"));
	}, []);
	// Particles component isn't respecting "zIndex" from the .json file. Box around it and force the z-index
	return (
		init &&
		<Box style={{ position: 'fixed', zIndex: -1 }}>
			<Particles id="tsparticles"
			// @ts-expect-error Options are loaded jsut fine. Typescript screams without a reason
			options={particleOptions} /> 
		</Box>

	)
}

export default BGParticles;