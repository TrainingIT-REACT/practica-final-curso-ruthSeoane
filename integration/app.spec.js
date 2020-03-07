

describe("App", () => {
    
    beforeEach(async () => {
      await page.goto('http://localhost:8080');
    });
  
    it("Saca el título de los álbumes", async () => {
      
      await expect(page).toMatchElement('h2', { text: 'Hoy te recomendamos estos álbumes:' });
    });

    it("Saca el título de las canciones", async () => {
      
        await expect(page).toMatchElement('h2', { text: 'Hoy te recomendamos estas canciones:' });
      });

  });