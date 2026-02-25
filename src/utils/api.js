// WhatsApp integration only

export const sendWhatsAppMessage = (name, email, message) => {
  const phoneNumber = '2348147042284' // No + sign

  const text = `
Hello Gene2612 Farms,

Full Name: ${name}
Email: ${email}

Message:
${message}

Please respond at your earliest convenience.
  `

  const encodedMessage = encodeURIComponent(text)

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    '_blank'
  )

  return { success: true }
}