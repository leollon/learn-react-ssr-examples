// Creating an API route

export default (req, res) => {
    res.status(200).json({
        quote: 'Write tests, not too many, mostly integration',
        author: 'Guillermo Rauch'
    });  // `res.status` and `res.json` custom response helpers added by Next.js.
};
