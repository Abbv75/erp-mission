<?php
class Response
{
    private ?string $message;
    private ?int $code;
    private ?array $data;

    public function __construct($messageTmp = null, $codeTmp = 200, $dataTmp = [])
    {
        $this->message = $messageTmp;
        $this->code = $codeTmp;
        $this->data = $dataTmp;
    }


    /**
     * Get the value of data
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Set the value of data
     *
     * @return  self
     */
    public function setData(array $data)
    {
        $this->data = $data;

        return $this;
    }

    /**
     * Get the value of code
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set the value of code
     *
     * @return  self
     */
    public function setCode(int $code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get the value of message
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Set the value of message
     *
     * @return  self
     */
    public function setMessage(int $message)
    {
        $this->message = $message;

        return $this;
    }

    public function showResponse()
    {
        header("HTTP/1.1 $this->code $this->message");
        echo json_encode([
            'code' => $this->code,
            'message' => $this->message,
            'data' => $this->data ?? []
        ]);

        exit;
    }

    public function satutCode500(?string $message = null)
    {
        $this->code = 500;
        $this->message = $message ?? "Une erreur est survenue.";
        $this->showResponse();
    }

    public function satutCode200(?string $message = null)
    {
        $this->code = 200;
        $this->message = $message ?? "Great.";
        $this->showResponse();
    }

    public function satutCode404(?string $message = null)
    {
        $this->code = 404;
        $this->message =  $message ?? "Demande introuvable.";
        $this->showResponse();
    }

    public function satutCode403(?string $message = null)
    {
        $this->code = 404;
        $this->message =  $message ?? "Vous n'etes pas authoriser.";
        $this->showResponse();
    }

    public function satutCode405(?string $message = null)
    {
        $this->code = 404;
        $this->message =  $message ?? "Methode incorrecte.";
        $this->showResponse();
    }
}
