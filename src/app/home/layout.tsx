export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <h2>Novo Home</h2>
        {children}
    </>
  )
}
