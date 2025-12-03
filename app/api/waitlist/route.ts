import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const {
            nombre,
            email,
            empresa,
            numero,
            pais,
            localidad,
            rubro,
        } = body;

        const result = await pool.query(
            `INSERT INTO turboxwaitlist.waitlist 
        (nombre, email, empresa, numero, pais, localidad, rubro) 
       VALUES ($1,$2,$3,$4,$5,$6,$7)
       RETURNING *`,
            [nombre, email, empresa, numero, pais, localidad, rubro]
        );

        return NextResponse.json({ data: result.rows[0] });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
