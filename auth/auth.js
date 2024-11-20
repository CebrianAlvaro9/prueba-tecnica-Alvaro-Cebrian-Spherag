import '../pages/counterPage.js'

export async function authentication() {
    try {
        const response = await fetch(
            'https://api.spherag.com/Authentication/Login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'federico.front.test@spherag.com',
                    password: 'd1KKaI6*1LCTF(=]£y?u',
                }),
            }
        )

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        localStorage.setItem('token', data.accessToken.token)

        // After login render the content component
        renderAppContent()
    } catch (error) {
        console.error('Authentication error:', error)
    }
}

//Remove loading and render content
function renderAppContent() {
    const pLoading = document.querySelector('.w-100 > .d-flex > p')
    const content = document.querySelector('.w-100 > .d-flex > .content')
    pLoading.remove()
    content.innerHTML = `<content-component></content-component>`
}
