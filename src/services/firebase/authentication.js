import firebaseAdmin from './admin.js'

const verifyToken = async (idToken) => {
  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken)
    const { uid, email, name, firebase } = decodedToken
    const placeholderName = email.split('@')[0]

    let provider = ''
    switch (firebase.sign_in_provider) {
      case 'google.com':
        provider = 'google'
        break
      case 'apple.com':
        provider = 'apple'
        break
      default:
        break
    }

    return {
      uid,
      email,
      name: name || placeholderName,
      provider
    }
  } catch (error) {
    return {}
  }
}

export default { verifyToken }
