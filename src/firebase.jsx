import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = {
    type: "service_account",
    project_id: "formulario-52152",
    private_key_id: "971bcf6147db36fd67476956caf9b7fc54a144e5",
    private_key: `-----BEGIN PRIVATE KEY-----
  MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDsnIE5VEItFLcB
  XQS+Lh9dIWhjPwRsQkAQnRXvydgIRG3ZuF1ZOJ7rr5MIxCFgd6b43PbSsFdYfQ7/
  cpGwXM2UDwjf5XddwmqeDlLHTDIiJABKv2yaQLflf+3V5ReU4Pc/eXaexiZJXNKx
  wNEdhMJTm7HkcOvmMRK56E//QHV1DEMz5i9dBVnuFqFutMzgIqShg7K/h2rzzUyo
  8+5XqxxDbssW7UVpbyXfRWJoCZdfPV5fbKJN5BiMYX51NBzmw27vJ36VRc7S2rEu
  OMbnbO+fYqJQuRtA6YrSKaFvkvK6uAUbOLrc6RNs6GgRW1SV1afKBRCsOg+FZbYS
  rlBmzAI5AgMBAAECggEAUC1CTqpiGEOWNcSO6GDZqOW6qTK/7W1PpzGLrur/JOIH
  NUkXfLXGiEfA863+P2GcN2Us0D0IBAiwjdgFTTVNRjgIAlKP7boFBdUFsNn9fPsl
  DC8sfmKizgZZEetk38KRlbUzgF7Vt3NYQ/p6Ad4sOUefcrDfBuwnE88IWI6/nm7o
  AQH+CBmX5D0ZglwZi4/dzG1JVyaNCiWV5JrwrK28dIshZdePeCGvu5PJ9vfyFP0n
  fsMzuKI8PyuLHMEfC31OjajqABvG2y4BGrxUGoCPxr1+FVDpIrOCYmAlXitLr2c9
  GBQlHhn6zykRF+CpFk9sL3/jsKVx1Dh+3TpKf/i9xwKBgQD5byCU7KzYMuYqHJEy
  gYcQd6vchW43G+NK1H5MgdyiZYWwlUhVadFQ4X9mTcDcsZ0lRsHBDhYVvWXdyx8k
  eDQAI5rEp/PSyxTGzftaxuseawYWQ18JNqmki2RtSWVzn3C7aojygSIawdBnCKpt
  /vpYwEyHLJHSVCOIk5/ljScfhwKBgQDy1vfi6XuCshmRwRLz0nkYbxaxpoXcHaYq
  orPPG82q5Xu0+iGykMVPWS54hfQI+v8kS7K1E8UIRhJT+S0VMqQumpYhiAp/Ct6w
  35G4VpBlfhnH8jo1aUsWCuPBQVumKmjMeSws1J7N6SSIGpofXnae4pJ3A4DDTw2/
  waNefsrAPwKBgFqtlImvVNKwBk6O3hYfUouhBcCAXWX5ZHLitxt3Jk9/Ws+sJYSv
  mGGv6JG3eIKCq19OzscxKMQ0e2DbI/ItJLJcPzp42EHshBwV6+e/YuBHBgp36Ye+
  8IMaDaNRSGl1MBViEHEgktZpWSrr0pF0XWyAVBHcGRL+dYCEMl/QJcXnAoGAdS+7
  y+q0Sau8nxO3G6Zz/ZCOOQiNDF3adDSz5LwcEd5QRlN2s38dWF9HB65Mx5CoU1Gc
  WbnCmW2HJrLWSKZ5iGvdCy1lM02BjYU2AujzIacqtcx0vpWjQG3c3sO1gIhyrknD
  QZcRU3iwwmVj/sNNJvtbhsdP+fBKSEEfn1g8a20CgYEAydjgISVIew4JxQk8QDJy
  I+G+zgwVN9cJo0t5ukxSdpVcXldNTCZs1A/q+J8YBeJtNQZrbj+VIYqBdFBQ3mwN
  a3/6YGH2Mb/DpYtgHNXctnOYPkp902mYbFX1OXpbHM+C5oqEA5bMbdSydspzqe9z
  h7sW4IFr1M0y4E/i3rGyFIA=
  -----END PRIVATE KEY-----`,
    client_email: "firebase-adminsdk-ujmb6@formulario-52152.iam.gserviceaccount.com",
    client_id: "105699786122856826336",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ujmb6%40formulario-52152.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  };
  

// Inicializar la aplicación de Firebase
firebase.initializeApp(firebaseConfig);

// Obtén una referencia a Firestore
const db = firebase.firestore();

export { firebase, db };