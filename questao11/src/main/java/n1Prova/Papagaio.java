package n1Prova;

public class Papagaio {
    private String corPumas;

    public String getCorPena() {
        return corPumas;
    }

    public void setCorPena(String corPumas) {
        this.corPumas = corPumas;
    }
    
    @Override
    public String toString(){
        return "A cor das pumas do papagaio é: " + this.corPumas;
    }
}
