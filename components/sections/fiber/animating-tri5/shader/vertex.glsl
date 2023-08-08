#include <begin_vertex>
        //transformed = (transformed - aCenter)*uProgress + aCenter;

        //float prog = (position.y + 1.0)/2.0;
        //float locprog = clamp((uProgress-0.4*prog)/0.6,0.0,10.);
        //transformed -= aCenter;
        //transformed *= locprog;
        //transformed += aCenter;

float prog = (position.y + 1.0) / 2.0;
float locprog = clamp((uProgress - 0.8 * prog) / 0.2, 0.0, 1.0);
transformed -= aCenter;
transformed += 3.0 * aRandom * normal * locprog;
transformed *= (1.0 - locprog);
transformed += aCenter;
transformed = rotate(transformed, vec3(0.0, 1.0, 0.0), locprog * aRandom * 3.14 * 3.0);