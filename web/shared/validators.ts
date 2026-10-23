const emailValidator = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const requiredValidator = (value: string) => {
  return value.trim().length > 0
}

export { emailValidator, requiredValidator  }
