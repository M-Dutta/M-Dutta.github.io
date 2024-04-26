import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Box } from "@material-ui/core";


const particleOptions = require('./particlesjs-config.json'); // eslint-disable-line  @typescript-eslint/no-var-requires
const BGParticles = () => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);
	// Particles component isn't respecting "zIndex" from the .json file. Box around it and force the z-index
	return (
		init &&
		<Box style={{ position: 'fixed', zIndex: -1 }}>
			<Particles id="tsparticles" options={particleOptions} />
		</Box>

	)
}

export default BGParticles;