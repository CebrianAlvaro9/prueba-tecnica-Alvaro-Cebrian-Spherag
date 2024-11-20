//function to set date to timestamp
export const setDate = (buttonId) => {
    let x
    let y = Date.now()
    switch (buttonId) {
        case 'b24h':
            x = y - 24 * 60 * 60 * 1000 // 24 hours
            break
        case 'b48h':
            x = y - 48 * 60 * 60 * 1000 // 48 hours
            break

        case 'b7d':
            x = y - 7 * 24 * 60 * 60 * 1000 // 7 days
            break

        case 'b30d':
            x = y - 30 * 24 * 60 * 60 * 1000 // 30 days
            break
    }

    return { id: buttonId, x: x, y: y }
}
