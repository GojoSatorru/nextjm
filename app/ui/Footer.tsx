import React from 'react'
import {Poppins} from "next/font/google";

const poppins = Poppins({subsets:['latin'],weight:['400']});

export default function Footer() {
  return (
    <footer className={ `${poppins.className} flex justify-between m-4 text-gray-500`}>
      <p>@Copyright All right reserved.  <br /> 09/Nov/2023</p>
      <p>By Mam Lyhourr</p>
    </footer>
  )
}
