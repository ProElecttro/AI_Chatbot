import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center border-b border-black bg-gray-800 p-3 text-white">
      <Image 
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDExNTQuOCA1MTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHN0eWxlPi5zdDB7ZmlsbDojZmZmfS5zdDF7ZmlsbDpyZWR9PC9zdHlsZT4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzE4LjYgMjU3LjhjLTggMjcuNi0yMC44IDQ3LjYtMzUuMiA2My42VjE4MWMwLTkuNi04LjQtMTcuNi0yMS42LTE3LjYtNS42IDAtMTAuNCAyLjgtMTAuNCA2LjggMCAyLjggMS42IDUuMiAxLjYgMTIuOHY2NC40Yy00LjggMjgtMTYuOCA1NC0zMi44IDU0LTExLjYgMC0xOC40LTExLjYtMTguNC0zMy4yIDAtMzMuNiA0LjQtNTEuMiAxMS42LTgwLjggMS42LTYgMTMuMi0yMi02LjQtMjItMjEuMiAwLTE4LjQgOC0yMS4yIDE0LjggMCAwLTEzLjQgNDcuNi0xMy40IDkwIDAgMzQuOCAxNC42IDU3LjYgNDEuNCA1Ny42IDE3LjIgMCAyOS42LTExLjYgMzkuMi0yNy42VjM1MWMtMjYuNCAyMy4yLTQ5LjYgNDMuNi00OS42IDg0IDAgMjUuNiAxNiA0NiAzOC40IDQ2IDIwLjQgMCA0MS42LTE0LjggNDEuNi01Ni44VjM1NWMyMS42LTE4LjggNDQuOC00Mi40IDU4LjQtODguOC40LTEuNi40LTMuNi40LTQgMC03LjYtNy42LTE2LjQtMTQtMTYuNC00IDAtNy4yIDMuNi05LjYgMTJ6bS03Ni44IDE5OGMtNi40IDAtMTAuNC05LjYtMTAuNC0yMiAwLTI0IDguOC0zOS4yIDIxLjYtNTIuNHY0Mi44YzAgNy42IDEuNiAzMS42LTExLjIgMzEuNnoiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODMzLjQgMzAxYy05LjYgMC0xMy42LTkuNi0xMy42LTE4LjR2LTY2YzAtOS42LTguNC0xNy42LTIxLjYtMTcuNi01LjYgMC0xMC40IDIuOC0xMC40IDYuOCAwIDIuOCAxLjYgNS4yIDEuNiAxMi44djYxLjZDNzg1IDI5MS40IDc3Ny44IDMwMSA3NjcgMzAxYy0xNCAwLTIyLjgtMTItMjIuOC0zMi44IDAtNTcuNiAzNS42LTgzLjYgNjYtODMuNiA0IDAgOCAuOCAxMS42LjggNCAwIDUuMi0yLjQgNS4yLTkuMiAwLTEwLjQtNy42LTE2LjgtMTguNC0xNi44LTQ4LjggMC05NS4yIDQwLjgtOTUuMiAxMDcuNiAwIDM0IDE2LjQgNjAuNCA0Ny42IDYwLjQgMTUuMiAwIDI2LjQtNy4yIDM0LjQtMTYuNCA2IDkuNiAxNi44IDE2LjQgMzAuOCAxNi40IDM0LjQgMCA1MC40LTM2IDU3LjItNjIuNC40LTEuNi40LTIuNC40LTIuOCAwLTcuNi03LjYtMTYuNC0xNC0xNi40LTQgMC04IDMuNi05LjYgMTItMy42IDE3LjYtMTAuOCA0My4yLTI2LjggNDMuMnoiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTQ5IDMyNy40YzM0LjQgMCA1MC0zNiA1Ny4yLTYyLjQgMC0uOC40LTEuNi40LTIuOCAwLTcuNi03LjYtMTYuNC0xNC0xNi40LTQgMC04IDMuNi05LjYgMTItMy42IDE3LjYtMTAuNCA0My4yLTI4LjggNDMuMi0xMC44IDAtMTYtMTAuNC0xNi0yMS42IDAtNDAgMTgtODcuMiAxOC05MiAxLjYtOS4yLTE0LjQtMjIuNC0xOS4yLTIyLjRoLTIwLjhjLTQgMC04IDAtMjEuMi0xLjYtNC40LTE2LjQtMTUuNi0yMS4yLTI1LjItMjEuMi0xMC40IDAtMjAgNy4yLTIwIDE4LjQgMCAxMS42IDcuMiAyMCAxNy4yIDI1LjYtLjQgMjAuNC0yIDUzLjYtNi40IDY5LjYtMy42IDEzLjYgMTcuMiAyOCAyMi40IDExLjIgNy4yLTIzLjIgOS42LTU4IDEwLTczLjZoMzQuOGMtMTIuOCAzNC40LTIwIDYyLjgtMjAgODguNCAwIDM1LjIgMjIuNCA0NS42IDQxLjIgNDUuNnoiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNIDk4NC42IDE4MyBDIDk4NC42IDE3NS40IDk4MyAxNzMgOTgzIDE3MC4yIEMgOTgzIDE2Ni4yIDk4Ny44IDE2My40IDk5My40IDE2My40IEMgMTAwNi42IDE2My40IDEwMTUgMTcxLjQgMTAxNSAxODEgTCAxMDE1IDE5OSBDIDEwMjUuOCAxNzYuNiAxMDQwLjIgMTU5LjQgMTA1OS44IDE1OS40IEMgMTA4Ni42IDE1OS40IDEwOTMgMTgxLjQgMTA5MyAxOTkuOCBMIDEwOTMgMjgyLjYgQyAxMDkzIDI4Ni4yIDEwOTMgMzAxIDExMDMuNCAzMDEgQyAxMTE5LjQgMzAxIDExMjcuNiAyNzUuNCAxMTMxLjIgMjU3LjggQyAxMTMyLjggMjQ5LjQgMTEzNi44IDI0NS44IDExNDAuOCAyNDUuOCBDIDExNDcuMiAyNDUuOCAxMTU0LjggMjU0LjYgMTE1NC44IDI2Mi4yIEMgMTE1NC44IDI2Mi42IDExNTQuOCAyNjMuNCAxMTU0LjQgMjY1IEMgMTE0Ny42IDI5MS40IDExMzAuNiAzMjcuNCAxMDk2LjIgMzI3LjQgQyAxMDc1IDMyNy40IDEwNjIuNiAzMTAuMiAxMDYyLjYgMjg5LjggTCAxMDYyLjYgMjA4LjYgQyAxMDYyLjYgMTk2LjIgMTA2MS44IDE4NS44IDEwNTQuMiAxODUuOCBDIDEwNDIuNiAxODUuOCAxMDE3LjggMjIwLjIgMTAxNSAyNTEuOCBMIDEwMTUgMzEwLjIgQyAxMDE1IDMxNy44IDEwMTUuNCAzMjcuNCAxMDAzLjggMzI3LjQgQyA5OTUuOCAzMjcuNCA5ODQuNiAzMjQuNiA5ODQuNiAzMDkuOCBaIE0gMjU5IDAgQyA0MDIgMCA1MTggMTE2IDUxOCAyNTkgQyA1MTggNDAyIDQwMiA1MTggMjU5IDUxOCBDIDExNiA1MTggMCA0MDIgMCAyNTkgQyAwIDExNiAxMTYgMCAyNTkgMCBaIE0gNDM1LjIgMzM3LjUgQyA0MzMuNCAzMjMuMyA0MjEuNCAzMTMuNSA0MDYgMzEzLjcgQyAzODMgMzE0IDM2My43IDMyNS45IDM1MC45IDMzMy44IEMgMzQ1LjkgMzM2LjkgMzQxLjYgMzM5LjIgMzM3LjkgMzQwLjkgQyAzMzguNyAzMjkuMyAzMzggMzE0LjEgMzMyIDI5Ny40IEMgMzI0LjcgMjc3LjQgMzE0LjkgMjY1LjEgMzA3LjkgMjU4IEMgMzE2IDI0Ni4yIDMyNy4xIDIyOSAzMzIuMyAyMDIuNCBDIDMzNi44IDE3OS43IDMzNS40IDE0NC40IDMyNS4xIDEyNC42IEMgMzIzIDEyMC42IDMxOS41IDExNy43IDMxNS4xIDExNi41IEMgMzEzLjMgMTE2IDMwOS45IDExNSAzMDMuMiAxMTYuOSBDIDI5My4xIDk2IDI4OS42IDkzLjggMjg2LjkgOTIgQyAyODEuMyA4OC40IDI3NC43IDg3LjYgMjY4LjUgODkuOSBDIDI2MC4yIDkyLjkgMjUzLjEgMTAwLjkgMjQ2LjQgMTE1LjEgQyAyNDUuNCAxMTcuMiAyNDQuNSAxMTkuMiAyNDMuNyAxMjEuMiBDIDIzMSAxMjIuMSAyMTEgMTI2LjcgMTk0LjEgMTQ1IEMgMTkyIDE0Ny4zIDE4Ny45IDE0OSAxODMuNiAxNTAuNiBMIDE4My43IDE1MC42IEMgMTc0LjkgMTUzLjcgMTcwLjkgMTYwLjkgMTY2IDE3My45IEMgMTU5LjIgMTkyLjEgMTY2LjIgMjEwIDE3My4xIDIyMS42IEMgMTYzLjcgMjMwIDE1MS4yIDI0My40IDE0NC42IDI1OS4xIEMgMTM2LjQgMjc4LjUgMTM1LjUgMjk3LjUgMTM1LjggMzA3LjggQyAxMjguOCAzMTUuMiAxMTggMzI5LjEgMTE2LjggMzQ0LjcgQyAxMTUuMiAzNjYuNSAxMjMuMSAzODEuMyAxMjYuNiAzODYuNyBDIDEyNy42IDM4OC4zIDEyOC43IDM4OS42IDEyOS45IDM5MC45IEMgMTI5LjUgMzkzLjYgMTI5LjQgMzk2LjUgMTMwIDM5OS41IEMgMTMxLjMgNDA2LjUgMTM1LjcgNDEyLjIgMTQyLjQgNDE1LjggQyAxNTUuNiA0MjIuOCAxNzQgNDI1LjggMTg4LjIgNDE4LjcgQyAxOTMuMyA0MjQuMSAyMDIuNiA0MjkuMyAyMTkuNSA0MjkuMyBMIDIyMC41IDQyOS4zIEMgMjI0LjggNDI5LjMgMjc5LjQgNDI2LjQgMjk1LjMgNDIyLjUgQyAzMDIuNCA0MjAuOCAzMDcuMyA0MTcuOCAzMTAuNSA0MTUuMSBDIDMyMC43IDQxMS45IDM0OC45IDQwMi4zIDM3NS41IDM4NS4xIEMgMzk0LjMgMzcyLjkgNDAwLjggMzcwLjMgNDE0LjggMzY2LjkgQyA0MjguNCAzNjMuNiA0MzYuOSAzNTEuMiA0MzUuMiAzMzcuNSBaIE0gNDExLjQgMzUyLjIgQyAzOTUuNCAzNTYgMzg3LjMgMzU5LjUgMzY3LjUgMzcyLjQgQyAzMzYuNiAzOTIuNCAzMDIuOCA0MDEuNyAzMDIuOCA0MDEuNyBDIDMwMi44IDQwMS43IDMwMCA0MDUuOSAyOTEuOSA0MDcuOCBDIDI3Ny45IDQxMS4yIDIyNS4yIDQxNC4xIDIyMC40IDQxNC4yIEMgMjA3LjUgNDE0LjMgMTk5LjYgNDEwLjkgMTk3LjQgNDA1LjYgQyAxOTAuNyAzODkuNiAyMDcgMzgyLjYgMjA3IDM4Mi42IEMgMjA3IDM4Mi42IDIwMy40IDM4MC40IDIwMS4zIDM3OC40IEMgMTk5LjQgMzc2LjUgMTk3LjQgMzcyLjcgMTk2LjggMzc0LjEgQyAxOTQuMyAzODAuMiAxOTMgMzk1LjEgMTg2LjMgNDAxLjggQyAxNzcuMSA0MTEuMSAxNTkuNyA0MDggMTQ5LjQgNDAyLjYgQyAxMzguMSAzOTYuNiAxNTAuMiAzODIuNSAxNTAuMiAzODIuNSBDIDE1MC4yIDM4Mi41IDE0NC4xIDM4Ni4xIDEzOS4yIDM3OC43IEMgMTM0LjggMzcxLjkgMTMwLjcgMzYwLjMgMTMxLjggMzQ2IEMgMTMzIDMyOS43IDE1MS4yIDMxMy45IDE1MS4yIDMxMy45IEMgMTUxLjIgMzEzLjkgMTQ4IDI4OS44IDE1OC41IDI2NS4xIEMgMTY4IDI0Mi42IDE5My42IDIyNC41IDE5My42IDIyNC41IEMgMTkzLjYgMjI0LjUgMTcyLjEgMjAwLjcgMTgwLjEgMTc5LjMgQyAxODUuMyAxNjUuMyAxODcuNCAxNjUuNCAxODkuMSAxNjQuOCBDIDE5NS4xIDE2Mi41IDIwMC45IDE2MCAyMDUuMiAxNTUuMyBDIDIyNi43IDEzMi4xIDI1NC4xIDEzNi41IDI1NC4xIDEzNi41IEMgMjU0LjEgMTM2LjUgMjY3LjEgOTcgMjc5LjEgMTA0LjcgQyAyODIuOCAxMDcuMSAyOTYuMSAxMzYuNyAyOTYuMSAxMzYuNyBDIDI5Ni4xIDEzNi43IDMxMC4zIDEyOC40IDMxMS45IDEzMS41IEMgMzIwLjUgMTQ4LjIgMzIxLjUgMTgwLjEgMzE3LjcgMTk5LjUgQyAzMTEuMyAyMzEuNSAyOTUuMyAyNDguNyAyODguOSAyNTkuNSBDIDI4Ny40IDI2MiAzMDYuMSAyNjkuOSAzMTcuOSAzMDIuNiBDIDMyOC44IDMzMi41IDMxOS4xIDM1Ny42IDMyMC44IDM2MC40IEMgMzIxLjEgMzYwLjkgMzIxLjIgMzYxLjEgMzIxLjIgMzYxLjEgQyAzMjEuMiAzNjEuMSAzMzMuNyAzNjIuMSAzNTguOCAzNDYuNiBDIDM3Mi4yIDMzOC4zIDM4OC4xIDMyOSA0MDYuMiAzMjguOCBDIDQyMy43IDMyOC41IDQyNC42IDM0OSA0MTEuNCAzNTIuMiBaIi8+Cjwvc3ZnPg=="
        width={90}
        height={0} // auto height
        alt="pic"
      />
      <span>
        <ul className="flex gap-10">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blogspot/123">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </span>
      <span>
      <ul className="flex gap-10">
          <li><CiSearch  className="scale-150"/></li>
          <li><CiHeart className="scale-150"/></li>
          <li><CiShoppingCart className="scale-150"/></li>
          <li><CiUser className="scale-150"/></li>
        </ul>
      </span>
      </nav>
    </div>
  )
}

export default Navbar
