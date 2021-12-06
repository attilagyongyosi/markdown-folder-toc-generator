import esbuild from 'esbuild';

const BUILD_TIMER = 'Build Time';

const SOURCE_DIR = 'src';
const DIST_DIR = 'dist';

async function build() {
    console.time(BUILD_TIMER);
    console.info('Starting project build...');

    await esbuild.build({
        entryPoints: [ `${SOURCE_DIR}/index.ts` ],
        outdir: DIST_DIR,
        bundle: true
    });

    console.info(`Build successful.`);
    console.timeEnd(BUILD_TIMER);
}

await build();
