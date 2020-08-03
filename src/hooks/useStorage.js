const { useState, useEffect } = require("react")
const { projectStorage, projectFirestore, timestamp } = require("../firebase/config")


const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)   

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('images')

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      setProgress(percentage)
    }, (err) => {
      // this function runs after the error is occured
      setError(err)
    }, async () => {
      // this function runs after the upload is completed
      const url = await storageRef.getDownloadURL()
      const createdAt = timestamp()
      await collectionRef.add({ url, createdAt })
      setUrl(url)
    })
  }, [file])

  return { progress, url, error }
}

export default useStorage