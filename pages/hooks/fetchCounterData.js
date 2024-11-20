//Function in order to fetch data from the API

export const fetchData = async (type, x, y) => {
    // Obtain the token from the storage
    const token = localStorage.getItem('token')

    // verify there is a token before to proceed
    if (!token) {
        console.error('Token no encontrado en localStorage')
        return
    }

    // API url
    const url = `https://apicore.spherag.com/AtlasElement/Monitoring/92/${type}/${x}/${y}`

    // Conf request with bearer token
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }

    try {
        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error('Error')
        }
        //JSON parse response
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Hubo un error con la solicitud:', error)
    }
}
