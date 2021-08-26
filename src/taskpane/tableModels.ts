const tableModels = {
  imgcenter: `
    <table>
      <tr>
          <td>
            <span style="background: #00ffff">Imagem centralizada</span>
          </td>
      </tr>
      <tr>
          <td style="text-align: center">
            <span style="background: #00ffff"><br/>G_ ou S_</span>
          </td>
      </tr>
      <tr>
          <td style="background: #d0cece">Fonte: </td>
      </tr>
    </table>
    <br />
    `,

  imgside: `
     <table>
    <thead>
    <tr>
        <th colSpan="2">
            <span style="background: #00ffff; font-weight: 500"">Imagem ao lado do texto</span>
        </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td rowSpan="3">Texto</td>
        <td><span style="background: #00ffff"><br/>G_ ou S_</span></td>
    </tr>
    <tr>
        <td style="background: #d0cece">Fonte: </td>
    </tr>
    </tbody>
    </table>
    <br />
    `,

  imgupside: `
    <table>
      <thead>
        <tr>
          <th colspan="2" style="text-align: left">
          <span style="background: #00ffff; font-weight: 500">Imagens acima do texto</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center"><span style="background: #00ffff"><br/>G_ ou S_</span></td>
          <td style="text-align: center"><span style="background: #00ffff"><br/>G_ ou S_</span></td>
        </tr>
        <tr>
          <td style="background: #d0cece">Fonte: </td>
          <td style="background: #d0cece">Fonte: </td>
        </tr>
        <tr>
          <td style="text-align: center">Texto 1:</td>
          <td style="text-align: center">Texto 2:</td>
        </tr>
      </tbody>
      </table>
      <br />
  `,

  imgcentercaption: `
    <table>
      <thead>
        <tr>
          <th style="text-align: left">
            <span style="background: #00ffff; font-weight: 500">Imagem centralizada com legenda</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center"><span style="background: #00ffff"><br/>G_ ou S_</span></td>
        </tr>
        <tr>
          <td><span style="background: #00ffff">Legenda:</span></td>
        </tr>
        <tr>
          <td style="background: #d0cece">Fonte: </td>
        </tr>
      </tbody>
      </table>
      <br />
  `,

  iconsidetext: `
      <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
      </tbody>
      </table>
  `
};

export default tableModels;
