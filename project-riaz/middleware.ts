
//this method is under testing


import { NextResponse, NextRequest } from 'next/server'


    
export function middleware(request: NextRequest) {
    const session = false
    return NextResponse.redirect(new URL('/login', request.url))
}
    
    


