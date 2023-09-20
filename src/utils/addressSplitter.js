export default function splitAddress(address) {
  const parts = address.split(', ');

  const city = parts[1];
  const country = parts[2];

  const addressObject = {
    city: city,
    country: country,
  };

  return addressObject;
}
