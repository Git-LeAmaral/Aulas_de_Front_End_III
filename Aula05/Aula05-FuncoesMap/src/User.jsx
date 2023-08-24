/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function User({ user }) {
  return (
    <>
      <img src={user.image} />
      <span>Ola eu sou {user.userName}</span>
    </>
  )
}
