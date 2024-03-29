// Block Chain Project
import crypto from 'crypto';

interface BlockShape {
  hash: string; // 해시 값
  prevHash: string; // 이전 해시 값
  height: number; // 블록의 위치
  data: string; // 블록이 보호할 데이터
}
class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    // Block 클래스의 calculateHash() static 메서드 호출
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  // static 메서드: 클래스의 인스턴스를 생성하지 않고도 직접 호출할 수 있는 메서드
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex'); // 해시 값 생성
  }
}
