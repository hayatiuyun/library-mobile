import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

let url;
if (__DEV__) {
    url = 'https://perpus-api.herokuapp.com/api';
} else {
    url = '';
}

const instance = axios.create({
    baseURL: url,
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDY3NTU1ODQsImp0aSI6ImV5SmhiR2NpT2lKU1UwRXhYelVpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMkluMC5nUTRCbjYzRzYtbjV4Qm83NUwyZnFLOVZLVXpLMTlGMUVIOUJIa0VKdGdYUWJfYWJGTGhUdld3a3RyLUVFTVhLT1NWRTRKM1dBdjZrdjYxQnU3MVZnZWZZcl9YMnEzbVR0emZLX1I5Q2o4VVhvTk1hNnFmNlRla01MbFgwczlLUnpxR1JkNDRjS2pHRVd4TUZRWkNlNmNtVzYwQlE1SUtxbW1lT3NVZUtTQ1lLWjFjNGpGdGtVZ09YYjN1Y2liT1hHSWsxMFZ5WG9JR3BRUlE3REtSb2pMcWx5TFFNc1IzTFNscDRaMk1LR25oRWtRcnM1a2I0NE51UTBZWkZyVVpJN3lHWEpEQmNKQUtuLWlpT2hwTVgydHF2Nnk0cVVFUEJCOXlyR1BtUC1uYzczbnVsaXladnhkR0djaGVCQUxIa053NUJmcnFCWjJ4dmx0c3l2N2FkMGRVeHZjdVMzbHRhWkR4Mk9ZUG1aQnYyY2hvRE5tdW9JMW5TajBwYmlIRU1Bc2ZLNlBwSDhEbnpwZFZVSlNWcFFwaDVjbV9aa3d6YUFLb0JZc0o5djlyTmswcW90TEpVVFZsbXFYaUcxOE0xdENaQkdkMV9nNEwza2IzaGNRNVVxTWNLX0dnYVE2SS15YTFkTWVCdEhYNHYySVFOR0ZaWU5RMHc3QUEya3NBSjJMS08wMVJsM2N4YUtFY0ZGUDQzY0k3WDlkbkZ5ZUxqZUVkLWtGSXl6UkgyMUV5Q3FqM1BLbmVQWWFSOUttUlhSQ0xwZEctNm4tbmxEeDVtcVhPQW90Q3FtMUJXMUdoR2pxbnJ6TlhPTzgtamZkcHhFX21pXzJZSS1GeHBkR0hHTDVId29MY0lzaEVyQ2QwZkI4al9acm13Yjk2czQwZC1IMUFLOU1QSkl6dy55bDM3NzZ0VU56YWMzVnR1SEVibmFnLlVNSjJTSkhSYlJMWUxBTHNHcU1BUlEuUFNTcTZpMEhRdUVkMU45SFRHVFZFdyIsImlzcyI6IjEiLCJlbWFpbCI6IiIsInNlc3Npb24iOiIzODU5ZTNkNC1mNzYyLTRhZWMtYThmYy1jMzQyYTZmZjdlZTkifQ.EzG4OQ3cvTZo3e3myaM2Hf5VTpKN9UQEUaSsMWSc3iw'
    }
});


instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;
