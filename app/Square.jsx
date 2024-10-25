'use client';

import { useState } from "react"

export default function Square({value,onSquareClick}){


    return <button className="p-2 border-2 border-black w-20 h-20" onClick={onSquareClick}>{value}</button>
}