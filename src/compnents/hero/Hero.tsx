"use client"

import React, { FC } from 'react'
import "./hero.scss"
import Link from 'next/link'

const Hero : FC = () => {
  return (
    <div className='hero'>
        <div className="container hero__container">
          <div className="hero__content">
            <h1 className='hero__title'>
              Best way to memorize Email Info
            </h1>
            <p className='hero__text'>Quickly set up all info about users, easy filtering and beginner friendly ui</p>
            <Link className='hero__btn' href={"/user/create-product"}>
              Get Started
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero