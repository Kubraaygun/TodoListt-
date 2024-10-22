# React Native To-Do Uygulaması

React Native ile geliştirdiğim bu proje, onboarding, görev yönetimi ve AsyncStorage ile kalıcı veri saklama özelliklerine sahip basit bir To-Do uygulamasıdır.

## Özellikler

- **Onboarding**: Kullanıcılar uygulamayı ilk açtıklarında onboarding (tanıtım) ekranını görürler.
- **Görev Yönetimi**: Kullanıcılar görev ekleyebilir, güncelleyebilir, tamamlayabilir veya silebilir.
- **Kalıcı Veri Saklama**: Görevler, AsyncStorage kullanılarak yerel olarak saklanır ve uygulama yeniden başlatıldığında görevler kaybolmaz.

## Screens

### Onboarding

- Yeni kullanıcılar için bir tanıtım akışı sağlar.
- Kullanıcılara dinamik bir deneyim sunmak için Lottie ile animasyon gösterir.
  Kullanıcılar onboarding sürecini atlayabilir veya tamamlayabilir.
- Onboarding tamamlandığında, durum Async

### Ana Ekran

- Onboarding tamamlandıktan sonra kullanıcıyı karşılayan ana ekran.
- Kullanıcılar To-Do listesine gidebilir veya onboarding durumunu sıfırlayabilir.

### To-Do

- Kullanıcılar görev ekleyebilir, düzenleyebilir, tamamlanmış olarak işaretleyebilir veya silebilir.
- Görevler AsyncStorage ile yerel olarak saklanır.
