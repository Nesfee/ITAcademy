import axios from 'axios';
import { Validator } from 'jsonschema';
import ozApi from '../data/ozApiSchema.json' assert  { type: "json" };

const validate = new Validator();

describe(`API oz tests`, () => {
    describe(`valid cases`, () => {
        let response;
        beforeEach(async () => {
            response = await axios.get('https://oz.by/', {
                headers: {
                    'Content-Type': 'text/html; charset=UTF-8'
                }
            })
        });


        it(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        })

        it(`should be valid response body`, async () => {
            const result = validate.validate(response.data, ozApi);
            expect(result.valid).toBe(true);
        })
    })

    describe('negative cases', () => {
        let response;
        beforeEach(async () => {
            try {
                response = await axios.get('https://oz.by/', {
                    headers: {
                        'Content-Type': 'sdadsdasd'
                    }
                })
            } catch (err) {
                response = err;
            }
        });

        it(`should return 403 with invalid token`, async () => {
            expect(response.status).toEqual(403);
        })
    })
})