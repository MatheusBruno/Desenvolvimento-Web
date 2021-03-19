package n1Prova;

public class Mosca {
    private int qtdPatas;

    public int getQtdPatas() {
        return qtdPatas;
    }

    public void setQtdPatas(int qtdPatas) {
        this.qtdPatas = qtdPatas;
    }
    
    @Override
    public String toString(){
        return "A mosca possui: " + this.qtdPatas + " patas";
    }
}
