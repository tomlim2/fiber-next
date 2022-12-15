const corsOptions = {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: process.env.NEXT_PUBLIC_FRONT,
    optionsSuccessStatus: 200,
}

export default corsOptions