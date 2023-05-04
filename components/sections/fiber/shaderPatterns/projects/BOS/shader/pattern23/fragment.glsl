#define PI 3.14159265358979323846

varying vec2 vUv;

void main() {
    vec2 st = vUv;
        st.x *= 1.;

        vec3 color = vec3(.0);

    // Cell positions
    vec2 point[5];
    point[0] = vec2(0.5,0.5);
    point[1] = vec2(0.5,0.0);
    point[2] = vec2(0.28,0.64);
    point[3] =  vec2(0.31,0.26);
    // point[4] = u_mouse/u_resolution;

    float m_dist = 1.;  // minimum distance

    // Iterate through the points positions
//     for (int i = 0; i < 5; i++) {
//         float dist = distance(st, point[i]);

//         // Keep the closer distance
//         m_dist = min(m_dist, dist);
//     }
    float dist = distance(st, point[0]);
    m_dist = dist;
	dist = distance(st, point[4]);
    m_dist = m_dist * dist;


    // Draw the min distance (distance field)
    color += m_dist;

    // Show isolines
    // color -= step(.7,abs(sin(50.0*m_dist)))*.3;
}