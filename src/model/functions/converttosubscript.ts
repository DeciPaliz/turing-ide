import subscripts from '../config/subscripts';

export default function convertToSubscript(num: number): string {
    let subscript = "";
    for (const c of "" + num) {
        subscript += subscripts[Number(c)];
    }
    return subscript;
}
